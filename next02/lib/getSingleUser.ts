export default async function getSingleUSer(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) {
    return;
  }

  return res.json();
}
