import React from "react";

function Left({ src, description }) {
  return (
    <div className="gallery">
      <div className="gallery-image">
        <img className="left" src={src} />
      </div>
      <div className="gallery-description left">{description}</div>
    </div>
  );
}

export default Left;
