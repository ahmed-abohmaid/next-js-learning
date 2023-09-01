export default async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${userId}`
  );

  if (!res.ok) {
    throw new Error('Faild to fetch data');
  }

  return res.json();
}
