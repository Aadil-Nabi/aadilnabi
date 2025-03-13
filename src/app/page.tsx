import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootPage() {
  return (
    <>
      <div
        className={`${roboto.className} text-center font-bold font-mono bg-amber-100 p-5`}
      >
        Welcome to my blog
      </div>
      <div className="flex">
        <div>
          <Image
            src="https://s3.ap-south-1.amazonaws.com/bucket.aadilnabi/mountains.jpg"
            alt="mountains"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="https://s3.ap-south-1.amazonaws.com/bucket.aadilnabi/girl.jpg"
            alt="girl"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="https://s3.ap-south-1.amazonaws.com/bucket.aadilnabi/road.jpg"
            alt="road"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="https://s3.ap-south-1.amazonaws.com/bucket.aadilnabi/village.jpg"
            alt="village"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
}
