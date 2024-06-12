import Image from "next/image";
import Link from "next/link";

const Navigator = () => {
  return (
    <div className="w-full flex items-center justify-between bg-white p-[16px] sticky">
      <Link href="/" className="w-full flex items-center gap-x-[6px]">
        <div className="border border-gray-200 shadow-md rounded-full size-fit cursor-pointer">
          <Image src="/profile.png" alt="thumbnail" width={50} height={50} />
        </div>
        <span>{"supin'log"}</span>
      </Link>
    </div>
  );
};

export default Navigator;
