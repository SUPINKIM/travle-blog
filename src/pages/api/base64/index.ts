import { NextApiRequest, NextApiResponse } from "next";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { getPlaiceholder } from "plaiceholder";

const POST = async ({ imageUrl }: { imageUrl: string }) => {
  try {
    const buffer = await readFile(path.join("./public", imageUrl));

    const { base64 } = await getPlaiceholder(buffer, { size: 10 });
    return base64;
  } catch (error) {
    console.error(error);
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ base64Url: string }>
) {
  const base64Url = await POST(JSON.parse(req.body));

  if (base64Url) {
    res.status(200).json({ base64Url });
    return;
  }
  res.status(500).json({ base64Url: "" });
}
