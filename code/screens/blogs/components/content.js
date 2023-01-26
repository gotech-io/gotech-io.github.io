import BlobButton from "../../../common/btns/blob";
import NavTag from "./nav-tag";
import Profile from "./profile";
import React from "react";

const BlogsContent = ({ content }) => {
  const { title, description, image, profile, link } = content;
  return (
    <div className="page-common-block blogs-content">
      <h3>{title}</h3>

      <NavTag text={"news"} />
      <div className="blogs-content-image">
        <img src={image} alt="blogs-image" />
      </div>

      <div className="blogs-content-profile">
        <Profile profile={profile} />
      </div>

      <p>{description}</p>

      <div className="blogs-content-link">
        <BlobButton link={link} btnText={"Read more"} />
      </div>
    </div>
  );
};

export default BlogsContent;
