import React from "react";
import animations from "../../../assets/js/animations";

function Video({ src, type }) {
  return (
    <video className="video" controls data-aos={animations.up}>
      <source src={src} type={type} />
    </video>
  );
}

export default Video;
