import LinkButton from "@/components/common/link-button";
import Header from "@/components/home/header";
import TripPosts from "@/components/home/contents/trip-posts";

export default function Home() {
  return (
    <div className="w-full grid grid-cols-1 px-[24px] py-[32px]">
      <Header />
      <div className="mt-[16px] flex items-center gap-x-[12px]">
        <LinkButton label="운영자는 누군가? 🤔 이력서 보러 가기" />
        <LinkButton label="최신 포스팅 보러 가기" />
      </div>
      <div className="mt-[28px]">
        <TripPosts />
      </div>
    </div>
  );
}
