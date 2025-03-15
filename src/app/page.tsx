import Image from "next/image";
import { Montserrat } from "next/font/google";

export default function RootPage() {
  return (
    <>
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
