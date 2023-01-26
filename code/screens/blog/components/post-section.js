import Post from "../../../common/post";
import React from "react";

const PostSection = ({ posts }) => {
  return (
    <div className="blogs-content">
      <h3>Latests Posts</h3>

      {posts.length &&
        posts.map(({ title, description }) => {
          return <Post key={title} title={title} description={description} />;
        })}
    </div>
  );
};

export default PostSection;
