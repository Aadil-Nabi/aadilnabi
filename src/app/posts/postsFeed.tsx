import { getPosts } from "@/api/posts/postDetails";
import Link from "next/link";

export default async function ProductsFeed() {
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
                  <Link href={`/posts/${post.id}/comments/`}>Comments</Link>
                </div>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
