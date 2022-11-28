import Image from "./img";
import React from "react";

function Left({ src, description }) {
  return (
    <div className="about-story-gallery">
      <div className="about-story-gallery-image">
        <img className="left" src={src} />
      </div>
      <div className="about-story-gallery-description left">{description}</div>
    </div>
  );
}

export default Left;
