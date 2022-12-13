import React from "react";

const ColorSection = ({ color, title, description, children }) => {
  return (
    <div className={color}>
      <div className="color-block">
        <div className="page-common-block">
          <h4 className="color-block-title">{title}</h4>
          <p className="color-block-description">{description}</p>

          {children}
        </div>
      </div>
    </div>
  );
};

export default ColorSection;
