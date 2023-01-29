import { posts } from "../../posts/index";
import { TAGS } from "../../tags";

export const NEWS = {
  type: TAGS.NEWS,
  header: {
    title: "News Blogs",
    tag: { link: "/blogs/news/", text: TAGS.NEWS },
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
