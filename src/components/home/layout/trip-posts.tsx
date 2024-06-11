import PostCard from "@/components/common/post-card";
import PostSelect from "../post-select";

const TripPosts = () => {
  return (
    <>
      <div className="my-[18px]">
        <PostSelect />
      </div>
      <div className="flex items-center gap-x-[18px] w-full flex-wrap gap-y-[24px]">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
};

export default TripPosts;
