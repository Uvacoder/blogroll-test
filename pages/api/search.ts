import Fuse from "fuse.js";
import { NextApiRequest, NextApiResponse } from "next/types";
import { fuseSearchOptions } from "../../utils/constant";
import { store } from "../../utils/store";
export default function search(req: NextApiRequest, res: NextApiResponse) {
  const query = req.body.query || req.query.query;
  if (query && typeof query === "string") {
    const fuse = new Fuse(store.getBlogs().sort(), fuseSearchOptions);
    const search = fuse.search(query);
    return res.status(200).json({
      search,
    });
  } else {
    return res.status(400).json({
      error:
        "You need to pass in a query parameter of type string in the search params or body.",
    });
  }
}
