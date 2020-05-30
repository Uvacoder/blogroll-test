import { NextApiRequest, NextApiResponse } from "next/types";
import { store } from "../../utils/store";
export default function blogs(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    blogs: store.getRandomlySortedBlogs(),
  });
}
