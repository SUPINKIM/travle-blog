import Navigator from "@/components/common/navigator";

const PostsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full">
      {/* <div>포스팅 목록입니다.</div> */}
      <Navigator />
      {children}
    </div>
  );
};

export default PostsLayout;
