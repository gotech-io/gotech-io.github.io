import BlogsContent from "./components/content";
import BlogsHeader from "./components/header";
import PostSection from "./components/post-section";
import React from "react";
import { handleUrl } from "../../utils";

// const subjects = [
//   {
//     type: SECTIONS.ALPHA,
//     content: <ListProjects />,
//   },
// ];

const posts = [
  {
    title: "How to improve Web Design Process",
    description:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
  },
];

function PageBlogs({ marquee, contact, _relativeURL, _ID }) {
  //const { title, description, sections } = CASE_STUDIES_DETAILS;

  return (
    <div>
      <div className="page-common-block blogs">
        <BlogsHeader />

        <BlogsContent />

        <PostSection posts={posts} />
      </div>

      <div className="page-common-sub-section">{contact}</div>
      <script
        type="module"
        src={handleUrl(`/assets/js/home/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default PageBlogs;
