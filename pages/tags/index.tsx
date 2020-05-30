import Link from "next/link";
import { Meta } from "../../components/Meta";
import { Layout } from "../../layouts/default";
import { store } from "../../utils/store";

interface TagsIndexProps {
  tags: [];
}

export default function TagsIndexPage(props: TagsIndexProps) {
  return (
    <Layout>
      <Meta
        title="Awesomeblog.club - All tags"
        description="Find blogs from any tag you can come up with."
      />
      <h5> All tags </h5>
      <div className="all-tags">
        {props.tags.map((tag, index) => {
          return (
            <Link key={index} href={`/tags/[id]`} as={`/tags/${tag}`}>
              <a> {tag} </a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}

export function getServerSideProps() {
  const tags = store.getTags().sort();
  return {
    props: {
      tags,
    },
  };
}
