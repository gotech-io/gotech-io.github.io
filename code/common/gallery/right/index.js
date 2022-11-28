import React from "react";

function Right({ src, description }) {
  return (
    <div className="gallery">
      <div className="gallery-description right">{description}</div>
      <div className="gallery-image">
        <img className="right" src={src} />
      </div>
    </div>
  );
}

export default Right;
