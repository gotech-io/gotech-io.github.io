import Image from "./img";
import React from "react";

function Right({ src, description }) {
  return (
    <div className="about-story-gallery">
      <div className="about-story-gallery-description right">{description}</div>
      <div className="about-story-gallery-image">
        <img className="right" src={src} />
      </div>
    </div>
  );
}

export default Right;
