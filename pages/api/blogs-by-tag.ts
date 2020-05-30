import { NextApiRequest, NextApiResponse } from "next/types";
import { store } from "../../utils/store";
export default function blogsByTag(req: NextApiRequest, res: NextApiResponse) {
  const tag = req.body.tag || req.query.tag;
  if (tag && typeof tag === "string") {
    return res.status(200).json({
      blogsByTag: store.getBlogsByTag(tag),
    });
  } else {
    return res.status(400).json({
      error: `You need to pass in a tag parameter of type string in the search params or body.`,
    });
  }
}
