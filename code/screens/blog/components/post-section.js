import Post from "../../../common/post";
import React from "react";

const PostSection = ({ posts }) => {
  return (
    <div className="page-common-block posts">
      <h3>Latests Posts</h3>

      {posts.length &&
        posts.map((post) => {
          return <Post key={post.title} post={post} />;
        })}
    </div>
  );
};

export default PostSection;
