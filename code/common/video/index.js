import React from "react";
import animations from "../../../assets/js/animations";

function Video({ src, title }) {
  return (
    <div className="page-common-block">
      <div className="video">
        <iframe src={src} allowFullScreen title={title}></iframe>
      </div>
    </div>
  );
}

export default Video;
