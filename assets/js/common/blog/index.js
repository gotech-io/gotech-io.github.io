import { COLORS } from "../colors";
import { posts } from "../posts";
import { SECTIONS } from "../sections";

export const PAGE_BLOG_DETAILS = {
  sections: [
    {
      type: SECTIONS.ALPHA,
      color: COLORS.MAIN,
    },
    {
      type: SECTIONS.BETA,
      color: COLORS.DEFAULT,
    },
  ],

  posts: posts,
};
