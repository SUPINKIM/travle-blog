import LinkButton from "@/components/common/link-button";
import Header from "@/components/home/header";
import TripPosts from "@/components/home/contents/trip-posts";

export default function Home() {
  return (
    <div className="w-full grid grid-cols-1 px-[24px] py-[32px]">
      <Header />
      <div className="mt-[16px] flex items-center gap-[12px] flex-wrap">
        <LinkButton
          link="https://cut-decade-d21.notion.site/b478021d66f6462182a9a89c5855140c?pvs=4"
          label="운영자는 누구인가? 🤔 이력서 보러 가기"
        />
        <LinkButton link="" label="최신 포스팅 보러 가기" />
      </div>
      <div className="mt-[28px]">
        <TripPosts />
      </div>
    </div>
  );
}
