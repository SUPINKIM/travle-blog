import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-x-[8px]">
        <Image src="/profile.png" alt="thumbnail" width={100} height={100} />
        <h1 className="font-semibold text-[28px]">{"Supin's trip blog 🛫"}</h1>
      </div>
      <Link href="/write">
        <Button>새 글 작성하기</Button>
      </Link>
    </div>
  );
};

export default Header;
