import NavTag from "./nav-tag";
import React from "react";

const navTags = [
  { link: "/", text: "all" },
  { link: "/", text: "News" },
  { link: "/", text: "Features" },
  { link: "/", text: "Tutorials" },
];

const BlogsHeader = ({}) => {
  return (
    <div className="page-common-block blogs-title">
      <h2>Enigma Blog</h2>
      <div className="blogs-title-links">
        {navTags.length &&
          navTags.map(({ link, text }) => {
            return <NavTag key={text} text={text} />;
          })}
      </div>
    </div>
  );
};

export default BlogsHeader;
