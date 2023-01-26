import NavTag from "./nav-tag";
import React from "react";

const navTags = [
  { link: "/blogs/all/", text: "all" },
  { link: "/blogs/news/", text: "News" },
  { link: "/blogs/features/", text: "Features" },
  { link: "/blogs/tutorials/", text: "Tutorials" },
];

const BlogsHeader = ({ header }) => {
  const { title, activeTag } = header;
  return (
    <div className="page-common-block blogs-title">
      <h2>{title}</h2>
      <div className="blogs-title-links">
        {navTags.length &&
          navTags.map(({ link, text }) => {
            return (
              <a key={text} href={link}>
                <NavTag text={text} />
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default BlogsHeader;
