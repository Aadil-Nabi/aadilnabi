import { getCommentsList } from "@/api/comments/commentsList";
import ListSkeleton from "@/components/skeltons/listskelton";
import { Suspense } from "react";

export default async function CommentsPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const postId = await params;
  const comments = await getCommentsList(postId.postId);
  return (
    <>
      <h1>Comments for post {postId.postId}</h1>
      <div>
        <ol>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.body}</li>
          ))}
        </ol>
      </div>
    </>
  );
}
