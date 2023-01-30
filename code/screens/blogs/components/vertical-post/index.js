import NavTag from "../nav-tag";
import React from "react";

const VerticalPost = ({ post }) => {
  const { title, description, image, type } = post;

  return (
    <div className="vertical-post">
      <div className="vertical-post-image">
        <img src={image} alt="vertical-post-image" />
      </div>

      <div className="vertical-post-content">
        <h6>{title}</h6>
        <p>{description}</p>
        <NavTag text={type} />
      </div>
    </div>
  );
};

export default VerticalPost;
