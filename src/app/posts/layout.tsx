const PostsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid grid-cols-1 gap-x-[20px]">
      <div>포스팅 목록입니다.</div>
      {children}
    </div>
  );
};

export default PostsLayout;
