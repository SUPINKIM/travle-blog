import { client } from "@/contant/mongo";
import { NextApiRequest, NextApiResponse } from "next";
import { RequestData, ResponseData } from "./types";

const POST = async (params: RequestData): Promise<{ save: boolean }> => {
  try {
    await client.connect();

    await client
      .db("travel")
      .collection("posts")
      .insertOne({ ...params });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    return { save: true };
  } catch (error) {
    return { save: false };
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log(req.body);
  const { save } = await POST(JSON.parse(req.body));

  if (save) {
    res.status(200).json({ message: "success" });
  }
  res.status(500).json({ message: "fail" });
}