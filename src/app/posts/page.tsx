import { Suspense } from "react";
import ProductsFeed from "./postsFeed";
import ListSkeleton from "@/components/skeltons/listskelton";

export default async function ProductsPage() {
  return (
    <>
      <div>
        <Suspense fallback={<ListSkeleton />}>
          <ProductsFeed />
        </Suspense>
      </div>
    </>
  );
}
