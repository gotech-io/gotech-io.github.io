import { COLORS } from "../common/colors";
import { SECTIONS } from "../common/sections";
import { posts } from "./posts";

export const BLOG_DETAILS = {
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
