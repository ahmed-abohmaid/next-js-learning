export default async function getSingleUSer(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) {
    throw new Error('Faild to fetch data');
  }

  return res.json();
}
