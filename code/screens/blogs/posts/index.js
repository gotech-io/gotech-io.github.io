import React from "react";
import { BLOG_DETAILS } from "../../../../assets/js/common/blog/details";
import { getTags } from "../../../../assets/js/common/blog/helpers";
import { POSTS } from "../../../../assets/js/common/posts";
import { PAGE_POSTS_DETAILS } from "../../../../assets/js/common/posts/page-details";
import { SECTIONS } from "../../../../assets/js/common/sections";
import PageWrapper from "../../../common/pageWrapper";
import BlogsContent from "../components/content";
import BlogsHeader from "../components/header";
import VerticalPostSection from "../components/vertical-post-section";

function PagePosts({ entity, marquee, contact, _relativeURL, _ID }) {
  const { sections } = PAGE_POSTS_DETAILS;

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
    {
      type: SECTIONS.BETA,
      content: <VerticalPostSection posts={POSTS} />,
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

export default PagePosts;
