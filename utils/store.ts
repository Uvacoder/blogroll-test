import database from "../database.json";
import { BlogType } from "./types";
export class Store {
  public blogs: BlogType[] = database.blogs;
  constructor() {}
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

export const store = new Store();
