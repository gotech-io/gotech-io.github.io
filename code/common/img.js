import React from "react";
import animations from "../../assets/js/animations";

const Image = ({ customClassName = "", src }) => {
  const className = `${customClassName} img`;
  return (
    <figure className={className}>
      <img src={src} />
    </figure>
  );
};

export default Image;
