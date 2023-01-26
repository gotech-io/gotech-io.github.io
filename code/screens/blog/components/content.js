import BlobButton from "../../../common/btns/blob";
import NavTag from "./nav-tag";
import Profile from "./profile";
import React from "react";

const BlogsContent = () => {
  return (
    <div className="blogs-content">
      <h3>E7 Ways To Improve Website Usability And Accessibility</h3>

      <NavTag text={"news"} />
      <div className="blogs-content-image">
        <img src={"/"} alt="blogs-image" />
      </div>

      <Profile src={"/"} title={"Software"} date={"July 24, 2019"} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
        sem vitae risus tristique posuere.
      </p>

      <div className="blogs-content-link">
        <BlobButton link={"/"} btnText={"Read more"} />
      </div>
    </div>
  );
};

export default BlogsContent;
