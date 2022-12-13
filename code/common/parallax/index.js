import React from "react";

function Parallax({ src, alt }) {
  return (
    <div className="parallax jarallax" data-jarallax>
      <img className="jarallax-img" src={src} alt={alt} />
    </div>
  );
}

export default Parallax;
