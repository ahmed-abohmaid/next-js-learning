type UserPostsProps = {
  promise: Promise<Post[]>;
};

export const UserPosts = async ({ promise }: UserPostsProps) => {
  const posts: Post[] = await promise;

  return posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <br />
    </article>
  ));
};
