import NavTag from "./nav-tag";
import React from "react";

const BlogsHeader = ({ title, tag, tags }) => {
  return (
    <div className="page-common-block blogs-title">
      <h2>{title}</h2>
      <div className="blogs-title-links">
        {tags &&
          tags.length &&
          tags.map(({ link, text }) => {
            const isActive = link === tag?.link;
            return (
              <a
                key={text}
                href={link}
                className={
                  isActive
                    ? "blogs-title-links-tag-active"
                    : "blogs-title-links-tag"
                }
              >
                <NavTag text={text} />
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default BlogsHeader;
