import Fuse from "fuse.js";
import { IAmFeelingLucky } from "../components/IAmFeelingLucky";
import { Meta } from "../components/Meta";
import { SearchList } from "../components/SearchList";
import { Layout } from "../layouts/default";
import { fuseSearchOptions } from "../utils/constant";
import { store } from "../utils/store";
import { BlogType } from "../utils/types";

interface IndexPageProps {
  blogs: BlogType[];
  random: BlogType;
}

function IndexPage({ blogs, random }: IndexPageProps) {
  const fuse = new Fuse(blogs, fuseSearchOptions);
  return (
    <Layout>
      <Meta
        title="Awesomeblog.club - explore"
        description="Discover awesome small and personal blogs."
      />
      <iframe
        src="https://ghbtns.com/github-btn.html?user=searchableguy&repo=awesomeblog-club&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="170"
        height="30"
        title="GitHub"
      ></iframe>

      <div
        style={{
          margin: "1rem 0",
        }}
      >
        <h4
          style={{
            paddingBottom: 10,
          }}
        >
          {" "}
          Maybe you should try something random today?{" "}
        </h4>
        <IAmFeelingLucky />
      </div>

      <SearchList fuse={fuse} blogs={blogs} />
    </Layout>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      blogs: store.getBlogs(),
      random: store.getRandomBlog(),
    },
  };
}

export default IndexPage;
