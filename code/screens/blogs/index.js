import BlogsContent from "./components/content";
import BlogsHeader from "./components/header";
import PageWrapper from "../../common/pageWrapper";
import PostSection from "./components/post-section";
import React from "react";
import { BLOG_DETAILS } from "../../../assets/js/common/blog/details/index";
import { PAGE_BLOG_DETAILS } from "../../../assets/js/common/blog/page-details";
import { SECTIONS } from "../../../assets/js/common/sections";
import { filteredPosts, getTags } from "../../../assets/js/common/blog/helpers";

function PageBlogs({ entity, marquee, contact, _relativeURL, _ID }) {
  const { sections } = PAGE_BLOG_DETAILS;
  const currentBlog = BLOG_DETAILS.find((item) => item.type === entity);
  const { title, tag, posts } = currentBlog;

  const currentPosts = filteredPosts(posts, entity);
  const content = currentPosts[0];
  const tags = getTags(BLOG_DETAILS);

  const subjects = [
    {
      type: SECTIONS.ALPHA,
      content: (
        <div className="blogs">
          <BlogsHeader title={title} tag={tag} tags={tags} />
          <BlogsContent content={content} />
        </div>
      ),
    },
    {
      type: SECTIONS.BETA,
      content: <PostSection posts={currentPosts} />,
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
