import { posts } from "../../posts/index";
import { TAGS } from "../../tags";

export const ALL = {
  type: TAGS.ALL,
  header: {
    title: "Add Here 1",
    tag: { link: "/blogs/all/", text: TAGS.ALL },
  },
  content: {
    title: "asdfghjk",
    description: "gcgvjklmnb fljkjhvbnmn ugfkjljv",
    image: "/",
    profile: {
      image: "/",
      title: "dfghj fghj",
      date: "1234 vbdfgh 45",
    },
    link: "/",
  },
  posts: posts,
};
