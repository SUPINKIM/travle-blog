"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";
import { FC } from "react";
import Link from "next/link";

interface PostCardProps {
  id: number;
  imageUrl: string;
  title: string;
  subTitle?: string;
}

const PostCard: FC<PostCardProps> = ({ id, imageUrl, title, subTitle }) => {
  return (
    <Link href={`/posts/${id}`}>
      <Card className="w-[340px] hover:cursor-pointer hover:-translate-y-1.5">
        <CardContent className="w-full grid grid-cols-1 gap-y-[12px] px-0 pb-0">
          <div className="relative w-full h-[150px]">
            <Image
              src={imageUrl}
              alt="thumbnail"
              sizes="140px"
              fill
              className="rounded-t-[12px]"
            />
          </div>
          <span className="px-[16px] font-semibold text-[18px]">{title}</span>
        </CardContent>
        {subTitle && (
          <CardFooter className="px-[16px] mt-[8px] text-gray-600">
            {subTitle}
          </CardFooter>
        )}
      </Card>
    </Link>
  );
};

export default PostCard;
