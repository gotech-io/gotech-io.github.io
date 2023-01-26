import NavTag from "../../screens/blog/components/nav-tag";
import Profile from "../../screens/blog/components/profile";
import React from "react";

const Post = ({ post }) => {
  const { title, description, image, tag, profile } = post;

  return (
    <div className="post">
      <div className="post-image">
        <img src={image} alt="post-image" />
      </div>

      <div className="post-content">
        <NavTag text={tag} />
        <h4>{title}</h4>
        <p>{description} </p>
        <Profile profile={profile} />
      </div>
    </div>
  );
};

export default Post;
