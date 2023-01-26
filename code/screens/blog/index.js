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

function PageCaseStudies({ marquee, contact, _relativeURL, _ID }) {
  //const { title, description, sections } = CASE_STUDIES_DETAILS;

  return (
    <div>
      <div className="page-common-block blogs">
        <BlogsHeader />

        <BlogsContent />

        <PostSection />
      </div>

      <div className="page-common-sub-section">{contact}</div>
      <script
        type="module"
        src={handleUrl(`/assets/js/home/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default PageCaseStudies;
