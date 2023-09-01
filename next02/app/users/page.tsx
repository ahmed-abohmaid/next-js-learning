import getAllUsers from '@/lib/getAllUsers';
import Link from 'next/link';

const page = async () => {
  const usersData: Promise<User[]> = getAllUsers();
  const users:User[] = await usersData;
  return (
    <section>
      <h2>
        <Link href="/">Back To Home</Link>
      </h2>
      <br />
      {users.map((user) => (
        <>
          <p key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
          <br />
        </>
      ))}
    </section>
  );
};
export default page;
