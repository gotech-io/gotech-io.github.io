import { posts } from "../../posts/index";
import { TAGS } from "../../tags";

export const NEWS = {
  type: TAGS.NEWS,
  title: "News Blogs",
  tag: { link: "/blogs/news/", text: TAGS.NEWS },
  posts: posts,
};
