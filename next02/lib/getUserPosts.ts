export default async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${userId}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    return;
  }

  return res.json();
}
