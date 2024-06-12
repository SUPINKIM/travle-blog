/**
 * TODO 메타 데이터 동적으로 생성하기
 * @link [https://nextjs.org/docs/app/building-your-application/optimizing/metadata]
 */

interface Contents {
  title: string;
  summary?: string;
  contents: Array<{ image?: string; texts: string }>;
}

const getData = async (id: string) => {
  const res = await fetch(
    "http://localhost:3000/posts/detail/kota-kinabalu.json",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.json();
};

const PostDetailPage = async ({ params }: { params: { slug: string } }) => {
  const data: Contents = await getData(params.slug);

  return <div>{data.title}</div>;
};

export default PostDetailPage;
