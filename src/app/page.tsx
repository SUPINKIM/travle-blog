import LinkButton from "@/components/common/link-button";
import Header from "@/components/home/header";
import TripPosts from "@/components/home/contents/trip-posts";
import ImageCarousel from "@/components/home/contents/images/image-carousel";

import { CAROUSEL_ITEMS } from "@/components/home/contents/images/constant";

import { readFile } from "node:fs/promises";
import path from "node:path";
import { getPlaiceholder } from "plaiceholder";

export default async function Home() {
  const newImages = [...CAROUSEL_ITEMS];

  const base64s = CAROUSEL_ITEMS.map(async (item) => {
    const buffer = await readFile(path.join("./public", item.imageUrl));

    const { base64 } = await getPlaiceholder(buffer, { size: 10 });
    return { ...item, blurDataURL: base64 };
  });

  const values = await Promise.all(base64s);

  values.forEach((value, idx) => {
    newImages[idx] = value;
  });

  return (
    <div className="w-full grid grid-cols-1 px-[24px] py-[32px]">
      <Header />
      <div className="mt-[16px] flex items-center gap-[12px] flex-wrap">
        <LinkButton
          link="https://cut-decade-d21.notion.site/b478021d66f6462182a9a89c5855140c?pvs=4"
          label="운영자는 누구인가? 🤔"
        />
        <LinkButton link="" label="최신 포스팅 보러 가기" />
      </div>
      <div className="mt-[28px] grid grid-cols-1 gap-y-[8px] w-full">
        <ImageCarousel images={newImages} />
        <TripPosts />
      </div>
    </div>
  );
}
