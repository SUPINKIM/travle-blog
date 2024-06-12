import PostSelect from "./post-select";
import TripPostCard from "./trip-post-card";

const TripPosts = () => {
  return (
    <>
      <div className="my-[18px]">
        <PostSelect />
      </div>
      <div className="flex items-center gap-x-[18px] w-full flex-wrap gap-y-[24px]">
        <TripPostCard />
      </div>
    </>
  );
};

export default TripPosts;
