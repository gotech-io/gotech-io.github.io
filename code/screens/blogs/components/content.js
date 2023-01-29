import NavTag from "./nav-tag";
import Profile from "./profile";
import React from "react";
import BlogsDescription from "./section-description";

const BlogsContent = ({ content, isPost }) => {
  const { title, description, descriptionDetails, type, image, profile, link } =
    content;
  return (
    <div className="page-common-block blogs-content">
      <h3>{title}</h3>

      <NavTag text={type} />
      <div className="blogs-content-image">
        <img src={image} alt="blogs-image" />
      </div>

      <div className="blogs-content-profile">
        <Profile profile={profile} />
      </div>

      <BlogsDescription
        description={description}
        details={descriptionDetails}
        link={link}
        isPost={isPost}
      />
    </div>
  );
};

export default BlogsContent;
