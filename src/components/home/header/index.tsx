import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-x-[8px]">
        <Image src="/profile.png" alt="thumbnail" width={100} height={100} />
        <div className="flex flex-col gap-y-[6px]">
          <h1 className="font-semibold text-[22px]">
            {"Supin's trip blog 🛫"}
          </h1>
          <h6 className="text-gray-800 text-[14px]">여행순이의 여행 일기장</h6>
        </div>
      </div>
      <Link href="/write">
        <Button>새 글 작성하기</Button>
      </Link>
    </div>
  );
};

export default Header;
