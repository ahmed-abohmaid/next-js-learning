import getSingleUSer from '@/lib/getSingleUser';
import getUserPosts from '@/lib/getUserPosts';
import { UserPosts } from './components/UserPosts';
import { Suspense } from 'react';
import { Metadata } from 'next';

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

  return {
    title: `Users | ${user.name}`,
    description: `This is the page of ${user.name}`,
  };
}

const UserPage = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getSingleUSer(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);
  const user: User = await userData;

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
