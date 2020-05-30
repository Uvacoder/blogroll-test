import { NextApiRequest, NextApiResponse } from "next/types";
import { store } from "../../utils/store";
export default function tags(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    tags: store.getTags(),
  });
}
