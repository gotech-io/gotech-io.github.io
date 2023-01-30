import React from "react";
import animations from "../../../../assets/js/animations";
import Post from "./post";

const PostSection = ({ posts }) => {
  return (
    <div className="page-common-block posts">
      {posts.length &&
        posts.map((post) => {
          return (
            <a
              key={post.title}
              href={post.link}
              data-aos-anchor-placement="top-center"
              data-aos={animations.zoomIn}
            >
              <Post post={post} />
            </a>
          );
        })}
    </div>
  );
};

export default PostSection;
