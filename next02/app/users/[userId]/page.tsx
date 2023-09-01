import getSingleUSer from '@/lib/getSingleUser';
import getUserPosts from '@/lib/getUserPosts';
import { UserPosts } from './components/UserPosts';
import { Suspense } from 'react';

type Params = {
  params: {
    userId: string;
  };
};

const UserPage = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> =  getSingleUSer(userId);
  const userPostsData: Promise<Post[]> =  getUserPosts(userId);
  const user = await userData;

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
