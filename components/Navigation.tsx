import Link from "next/link";
import { Fragment } from "react";

const links = [
  {
    href: "/contribute",
    text: "How to contribute",
  },
  {
    href: "/submit",
    text: "Submit your blog",
  },
  {
    href: "/deployment",
    text: "Deploy your own",
  },
  {
    href: "/contact",
    text: "Send a message",
  },
  {
    href: "/motivation",
    text: "Motivation",
  },
  {
    href: "/tags",
    text: "Tags",
  },
];

export function Navigation() {
  return (
    <nav>
      <p>
        {links.map((item) => (
          <Fragment>
            <Link href={item.href}>
              <a>{item.text}</a>
            </Link>{" "}
            /{" "}
          </Fragment>
        ))}

        <a
          target="_blank"
          rel="noopener noreferrer"
          href={process.env.CODE_REPO}
        >
          Source Code
        </a>
      </p>
      <Link href="/">
        <a>
          <h2>{process.env.TITLE}</h2>
        </a>
      </Link>
      <p> {process.env.DESCRIPTION} </p>
    </nav>
  );
}
