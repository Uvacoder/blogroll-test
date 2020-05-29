import Fuse from "fuse.js";
import { IAmFeelingLucky } from "../components/IAmFeelingLucky";
import { Meta } from "../components/Meta";
import { SearchList } from "../components/SearchList";
import { Layout } from "../layouts/default";
import { store } from "../utils/store";

function IndexPage({ blogs }) {
  const options = {
    keys: ["title", "author", "tags", "description", "website"],
  };
  const fuse = new Fuse(blogs, options);

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

      <h4
        style={{
          paddingBottom: 5,
        }}
      >
        {" "}
        Maybe you should try something random today?{" "}
      </h4>
      <IAmFeelingLucky />

      <SearchList fuse={fuse} blogs={blogs} />
    </Layout>
  );
}

export async function getStaticProps() {
  const blogs = store.getBlogs();
  return {
    props: {
      blogs,
    },
  };
}

export default IndexPage;
