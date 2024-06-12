import { FC } from "react";
import { Countries } from "../types";
import PostCard from "@/components/common/post-card";

interface TripPostCardsProps {
  country: string;
}

const PostLists: Record<
  Countries,
  Array<{ id: number; imageUrl: string; title: string; subTitle?: string }>
> = {
  [Countries.ENGLAND]: [],
  [Countries.FRANCE]: [],
  [Countries.HONG_KONG]: [],
  [Countries.SINGAPORE]: [],
  [Countries.VIETNAM]: [],
  [Countries.KOTA_KINABALU]: [
    {
      id: 1,
      title: "코타키나발루 여행기",
      imageUrl: "/kota-kinabalu/sunset.png",
      subTitle:
        "with my parents _ that is my first abroad trip with familly 💜",
    },
    {
      id: 2,
      title: "코타키나발루 여행기2",
      imageUrl: "/kota-kinabalu/swimming-pool.png",
      subTitle:
        "with my parents _ that is my first abroad trip with familly 💜",
    },
  ],
  [Countries.JAPAN]: [
    {
      id: 3,
      title: "오사카에 가다",
      imageUrl: "/japan/dotonbori.png",
      subTitle: "여름 오사카는 죽음이다.. 😵",
    },
  ],
};

const TripPostCards: FC<TripPostCardsProps> = ({ country }) => {
  if (country === "") {
    return PostLists["Kota Kinabalu"].map(
      ({ id, title, imageUrl, subTitle }) => (
        <PostCard
          key={id}
          id={id}
          imageUrl={imageUrl}
          title={title}
          subTitle={subTitle}
        />
      )
    );
  }

  return (
    <>
      {PostLists[country as Countries].map(
        ({ id, imageUrl, title, subTitle }) => (
          <PostCard
            key={id}
            id={id}
            imageUrl={imageUrl}
            title={title}
            subTitle={subTitle}
          />
        )
      )}
      {!PostLists[country as Countries].length && (
        <div className="w-[400px] bg-gray-200 rounded-[8px] h-[46px] flex items-center justify-center mt-[28px]">
          🙇‍♀️ 포스트를 준비중입니다... 조금만 기다려주세요.!
        </div>
      )}
    </>
  );
};

export default TripPostCards;
