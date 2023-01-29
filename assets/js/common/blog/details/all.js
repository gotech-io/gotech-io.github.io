import { posts } from "../../posts/index";
import { TAGS } from "../../tags";

export const ALL = {
  type: TAGS.ALL,
  header: {
    title: "All Blogs",
    tag: { link: "/blogs/all/", text: TAGS.ALL },
  },
  content: {
    title: "7 Ways To Improve Website Usability And Accessibility",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    image: "/assets/images/about/img1.jpeg",
    profile: {
      image: "/assets/images/about/img1.jpeg",
      title: "dSoftware",
      date: "July 24, 2019",
    },
    link: "/",
  },
  posts: posts,
};
