import NavTag from "../../screens/blog/components/nav-tag";
import Profile from "../../screens/blog/components/profile";
import React from "react";

const Post = ({ title, description }) => {
  return (
    <div className="post">
      <div className="post-image">
        <img src={"/"} />
      </div>
      <div className="post-content">
        <NavTag text={"news"} />
        <h4>{title}</h4>
        <p>{description} </p>
        <Profile src={"/"} title={"Software"} date={"July 24, 2019"} />
      </div>
    </div>
  );
};

export default Post;
