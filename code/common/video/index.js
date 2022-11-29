import React from "react";
import animations from "../../../assets/js/animations";

function Video({ videoList }) {
  return (
    <video className="video" controls data-aos={animations.up}>
      {videoList.map(({ src, type }, i) => {
        return <source key={i} src={src} type={type} />;
      })}
    </video>
  );
}

export default Video;
