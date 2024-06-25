/**
 * TODO 메타 데이터 동적으로 생성하기
 * @link [https://nextjs.org/docs/app/building-your-application/optimizing/metadata]
 */

interface Contents {
  title: string;
  summary?: string;
  date?: string;
  contents: Array<{ image?: string; texts: string }>;
}

const ContentsMapper: Record<string, string> = {
  "1": "http://localhost:3000/posts/detail/kota-kinabalu.json",
} as const;

const getData = async (id: string) => {
  try {
    const res = await fetch(ContentsMapper[id], {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.json();
  } catch (error) {}
};

const PostDetailPage = async ({ params }: { params: { id: string } }) => {
  const data: Contents = await getData(params.id);

  if (!data) {
    return (
      <div className="w-full font-semibold text-[20px] flex mt-[20px] justify-center">
        Not Found 🙃
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center p-[24px] gap-[8px] flex-col items-center">
      <h1 className="text-[28px] font-semibold">{data.title}</h1>
      {data.summary && <p className="mt-[16px]">{data.summary}</p>}
      <div className="content max-w-[800px] mt-[32px] grid grid-cols-1 gap-[12px] justify-center px-[8px] bg-gray-50 rounded-[8px]">
        {data.contents.map(({ image, texts }) => (
          <p key={texts} className="p-[16px]">
            {texts}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PostDetailPage;
