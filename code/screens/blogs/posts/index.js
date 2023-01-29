import React from "react";
import { BLOG_DETAILS } from "../../../../assets/js/common/blog/details";
import { getTags } from "../../../../assets/js/common/blog/helpers";
import { PAGE_BLOG_DETAILS } from "../../../../assets/js/common/blog/page-details";
import { POSTS } from "../../../../assets/js/common/posts";
import { SECTIONS } from "../../../../assets/js/common/sections";
import PageWrapper from "../../../common/pageWrapper";
import BlogsContent from "../components/content";
import BlogsHeader from "../components/header";

function PageBlogs({ entity, marquee, contact, _relativeURL, _ID }) {
  const { sections } = PAGE_BLOG_DETAILS;

  const currentPost = POSTS.find((item) => item.entity === entity);
  const { title } = BLOG_DETAILS.find((item) => item.type === currentPost.type);

  const tags = getTags(BLOG_DETAILS);

  const subjects = [
    {
      type: SECTIONS.ALPHA,
      content: (
        <div className="posts">
          <BlogsHeader title={title} tags={tags} />
          <BlogsContent content={currentPost} isPost={true} />
        </div>
      ),
    },
    // {
    //   type: SECTIONS.BETA,
    //   content: <PostSection posts={currentPosts} />,
    // },
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
