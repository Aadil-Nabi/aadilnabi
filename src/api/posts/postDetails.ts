interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getPosts = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await data.json();

  return posts;
};
