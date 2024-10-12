"use client";

import TripPostSelect from "./trip-post-select";
import TripPostCards from "@/components/home/contents/trip-post-cards";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const TripPosts = () => {
  const [country, setCountry] = useState("");

  return (
    <>
      <div className="py-[12px]">
        <div className="flex gap-[8px] justify-between flex-wrap">
          <Button
            className="px-[20px] py-[24px] rounded-lg font-semibold text-[16px]"
            variant="secondary"
          >
            <Link href="/posts/1">최신 포스팅 보러 가기 💻</Link>
          </Button>
          <TripPostSelect setCountry={setCountry} />
        </div>
      </div>
      <div className="flex pb-[8px] items-center min-[746px]:justify-start justify-center gap-x-[18px] w-full flex-wrap gap-y-[24px]">
        <TripPostCards country={country} />
      </div>
    </>
  );
};

export default TripPosts;
