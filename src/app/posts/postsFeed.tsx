import { getPosts } from "@/api/posts/postDetails";
import CommentsFeed from "../comments/page";
import Input from "@/components/input";
import Button from "@/components/button";

export default async function PostsFeed() {
  const posts = await getPosts();

  return (
    <>
      <div className="container-flex">
        {posts.map((post) => (
          <div
            key={post.id}
            className="overflow-hidden rounded-lg bg-white shadow-2xl mb-2"
          >
            <div className="px-4 py-5 sm:p-6">
              <ul>
                <h2 className="font-semibold">Post</h2>
                <li>{post.title}</li>
                <br />
                <div>
                    <Input/>
                    <Button/>
                  <CommentsFeed />
                </div>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
