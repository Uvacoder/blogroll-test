import { NextApiRequest, NextApiResponse } from "next/types";
import { store } from "../../utils/store";
export default function random(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    random: store.getRandomBlog(),
  });
}
