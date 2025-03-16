import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default function Navigation() {
  return (
    <>
      <div
          className={`${montserrat.className} container-flex flex bg-amber-100 p-5 gap-5`}
      >
        <div>
          <Link href={"/"}>Home</Link>
        </div>
        <div>
          <Link href={"/posts"}>Posts</Link>
        </div>
        <div>
          <Link href={"/users"}>Users</Link>
        </div>
        <div>
          <Link href={"/dashboard"}>Dashboard</Link>
        </div>
      </div>
    </>
  );
}
