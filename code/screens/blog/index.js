import BlogsContent from "./components/content";
import BlogsHeader from "./components/header";
import PageWrapper from "../../common/pageWrapper";
import PostSection from "./components/post-section";
import React from "react";
import { PAGE_BLOG_DETAILS } from "../../../assets/js/common/blog";
import { SECTIONS } from "../../../assets/js/common/sections";

function PageBlogs({ entity, marquee, contact, _relativeURL, _ID }) {
  const { sections, posts } = PAGE_BLOG_DETAILS;

  const subjects = [
    {
      type: SECTIONS.ALPHA,
      content: (
        <div className="blogs">
          <BlogsHeader />
          <BlogsContent />
        </div>
      ),
    },
    {
      type: SECTIONS.BETA,
      content: <PostSection posts={posts} />,
    },
  ];

  return (
    <div className="b">
      <PageWrapper
        sections={sections}
        subjects={subjects}
        marquee={marquee}
        contact={contact}
        _relativeURL={_relativeURL}
        _ID={_ID}
      />
    </div>
  );
}

export default PageBlogs;
