import getSingleUSer from '@/lib/getSingleUser';
import getUserPosts from '@/lib/getUserPosts';
import { UserPosts } from './components/UserPosts';
import { Suspense } from 'react';
import { Metadata } from 'next';
import getAllUsers from '@/lib/getAllUsers';
import { notFound } from 'next/navigation';

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getSingleUSer(userId);
  const user: User = await userData;

  if (!user?.name) {
    return {
      title: 'User Not Found',
    };
  }

  return {
    title: `Users | ${user.name}`,
    description: `This is the page of ${user.name}`,
  };
}

const UserPage = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getSingleUSer(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);
  const user: User = await userData;

  if (!user?.name) notFound();

  return (
    <section>
      <h1>{user.name}</h1>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </section>
  );
};
export default UserPage;

/**
 * To make next know what the parameters are going to be
 * and make these pages be statically generated (SSG).
 * We can make this only when we know what is the params will be.
 */
export async function generateStaticParams(): Promise<{ userId: string; }[]> {
  const usersData: Promise<User[]> = getAllUsers();
  const users: User[] = await usersData;

  return users.map((user) => ({ userId: user.id.toString() }));
}
