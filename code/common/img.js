import React from "react";
import animations from "../../assets/js/animations";

const Image = ({ customClassName = "", src }) => {
  const className = `${customClassName} img`;
  return (
    <figure
      className={className}
      data-aos={animations.zoomIn}
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <img src={src} />
    </figure>
  );
};

export default Image;
