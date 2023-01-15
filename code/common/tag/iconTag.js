import React from "react";
import SimpleTag from "./simpleTag";

const IconTag = ({ title, icon, image }) => {
  return (
    <div className="tags-item">
      {icon ? (
        <i className={icon} />
      ) : (
        <div className="tags-item-image">
          <img src={image} />
        </div>
      )}
      <p> {title}</p>
    </div>
  );
};

export default IconTag;
