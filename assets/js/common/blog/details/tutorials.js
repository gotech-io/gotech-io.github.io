import { posts } from "../../posts/index";
import { TAGS } from "../../tags";

export const TUTORIALS = {
  type: TAGS.TUTORIALS,
  title: "Tutorials Blogs",
  tag: { link: "/blogs/tutorials/", text: TAGS.TUTORIALS },
  posts: posts,
};
