import React from "react";
import animations from "../../../assets/js/animations";

const IconBlob = ({ icon }) => {
  return (
    <div className="icons-wrapper">
      <i className={`icons-wrapper-icon ${icon}`}></i>
    </div>
  );
};

export default IconBlob;
