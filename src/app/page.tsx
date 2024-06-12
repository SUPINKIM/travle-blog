import LinkButton from "@/components/common/link-button";
import Header from "@/components/home/header";
import TripPosts from "@/components/home/contents/trip-posts";

export default function Home() {
  return (
    <div className="w-full grid grid-cols-1 px-[24px] py-[32px]">
      <Header />
      <div className="grid grid-cols-1 gap-y-[12px]">
        <LinkButton label="이력서 보러 가기" />
        <LinkButton label="최신 포스팅 보러 가기" />
        <TripPosts />
      </div>
    </div>
  );
}
