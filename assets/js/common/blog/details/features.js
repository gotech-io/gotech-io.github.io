import { posts } from "../../posts/index";
import { TAGS } from "../../tags";

export const FEATURES = {
  type: TAGS.FEATURES,
  title: "Features Blogs",
  tag: { link: "/blogs/features/", text: TAGS.FEATURES },
  posts: posts,
};
