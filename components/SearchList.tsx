import Fuse from "fuse.js";
import { useMemo, useState } from "react";
import { fuseSearchOptions } from "../utils/constant";
import { BlogType } from "../utils/types";
import { BlogList } from "./Blog";

interface SearchListProps {
  blogs: BlogType[];
  fuse: Fuse<any, any>;
}

export function SearchList(props: SearchListProps) {
  const blogs = props.blogs;
  const fuse = useMemo(() => new Fuse(blogs, fuseSearchOptions), [blogs]);
  const [query, setQuery] = useState("");
  function onQuery(event) {
    const query = event.target.value as string;
    if (query.length > 2) {
      setQuery(query);
    } else {
      setQuery("");
    }
  }
  return (
    <div>
      <h5> New favorite blog few typos away... </h5>
      <input
        placeholder="Search"
        aria-label="search box"
        type="text"
        onChange={onQuery}
      />
      <BlogList
        items={query ? fuse.search(query).map((result) => result.item) : blogs}
      />

      <p> Search works with all the metadata including tags. </p>
    </div>
  );
}
