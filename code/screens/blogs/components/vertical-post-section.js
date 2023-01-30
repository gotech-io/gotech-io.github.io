import React from "react";
import animations from "../../../../assets/js/animations";
import VerticalPost from "./vertical-post";

const VerticalPostSection = ({ posts }) => {
  return (
    <div className="page-common-block vertical-posts">
      {posts.length &&
        posts.map((post) => {
          return (
            <a
              className="vertical-posts-link"
              key={post.title}
              href={post.link}
              data-aos-anchor-placement="top-center"
              data-aos={animations.zoomIn}
            >
              <VerticalPost post={post} />
            </a>
          );
        })}
    </div>
  );
};

export default VerticalPostSection;
