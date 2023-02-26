import { POSTS } from "../../posts";
import { TAGS } from "../../tags";

export const ALL = {
  type: TAGS.ALL,
  title: "All Blogs",
  tag: { link: "/blogs/all/", text: TAGS.ALL },
  posts: POSTS,
};
