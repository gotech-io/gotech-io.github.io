import { posts } from "../../posts/index";
import { TAGS } from "../../tags";

export const TUTORIALS = {
  type: TAGS.TUTORIALS,
  header: {
    title: "Tutorials Blogs",
    tag: { link: "/blogs/tutorials/", text: TAGS.TUTORIALS },
  },
  // content: {
  //   title: "asdfghjk",
  //   description: "gcgvjklmnb fljkjhvbnmn ugfkjljv",
  //   image: "/",
  //   profile: {
  //     image: "/",
  //     title: "dfghj fghj",
  //     date: "1234 vbdfgh 45",
  //   },
  //   link: "/",
  // },
  posts: posts,
};
