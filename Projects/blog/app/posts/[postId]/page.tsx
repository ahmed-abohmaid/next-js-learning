import { getPostData, getSortedPostsData } from '@/lib/posts';
import notFound from './not-found';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: {
    postId: string;
  };
};

export function generateStaticParams() {
  const posts: BlogPost[] = getSortedPostsData();

  return posts.map((post) => ({ postId: post.id }));
}

export function generateMetadata({ params: { postId } }: Props): Metadata {
  const posts: BlogPost[] = getSortedPostsData();

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
  };
}

export default async function page({ params: { postId } }: Props) {
  const posts: BlogPost[] = getSortedPostsData();

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{date}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}
