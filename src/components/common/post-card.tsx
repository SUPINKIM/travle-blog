import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";

const PostCard = () => {
  return (
    <Card className="max-w-[340px] hover:cursor-pointer hover:-translate-y-1.5">
      <CardContent className="w-full grid grid-cols-1 gap-y-[12px] px-0 pb-0">
        <div className="relative w-full h-[150px]">
          <Image
            src="/sunset.png"
            alt="thumbnail"
            sizes="140px"
            fill
            className="rounded-t-[12px]"
          />
        </div>
        <span className="px-[16px] font-semibold text-[18px]">
          코타키나발루 여행기
        </span>
      </CardContent>
      <CardFooter className="mt-[8px] text-gray-600">
        with my parents _ that is my first abroad trip with familly
      </CardFooter>
    </Card>
  );
};

export default PostCard;
