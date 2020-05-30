import { readdirSync, readFileSync } from "fs";
import { BlogType } from "./types";
export class Store {
  public blogs: BlogType[];
  constructor(public dir: string) {
    const paths = readdirSync(dir, "utf-8");
    const blogs = (paths.map((path) => {
      const content = readFileSync(`${dir}/${path}`, "utf-8");
      const json = JSON.parse(content);
      return json;
    }) as unknown) as BlogType[];
    this.blogs = blogs;
  }
  getTags() {
    const tags = this.blogs.map((item) => item.tags).flat();
    return [...new Set(tags)];
  }
  getBlogsByTag(tag: string) {
    return this.blogs.filter((item) => item.tags.includes(tag));
  }
  getBlogs() {
    return this.blogs;
  }
  getRandomlySortedBlogs() {
    return this.getBlogs()
      .map((blog) => ({ sort: Math.random(), blog }))
      .sort((a, b) => a.sort - b.sort)
      .map((item) => item.blog);
  }
  getRandomBlog() {
    const index = Math.floor(Math.random() * this.blogs.length);
    return this.blogs[index];
  }
}

export const store = new Store("blogs");
