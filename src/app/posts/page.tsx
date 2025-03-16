import { Suspense } from "react";
import PostsFeed from "./postsFeed";
import ListSkeleton from "@/components/skeltons/listskelton";
import Input from "@/components/input";
import Button from "@/components/button";

export default async function ProductsPage() {
  return (
    <>
      <div>
        <Suspense fallback={<ListSkeleton />}>
          <PostsFeed />
            <Input  />
            <Button/>
        </Suspense>
      </div>
    </>
  );
}
