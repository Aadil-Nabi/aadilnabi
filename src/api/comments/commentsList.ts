interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const getCommentsList = async (postId: string) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  const comment: Comment[] = await data.json();
  return comment;
};
