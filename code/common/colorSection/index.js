import Paragraphs from "./paragraphs";
import React from "react";

const ColorSection = ({ color, title, description, paragraphs, children }) => {
  return (
    <div className={color}>
      <div className="color-block">
        <div className="page-common-block">
          <h4 className="color-block-title">{title}</h4>
          {description && (
            <p className="color-block-description">{description}</p>
          )}

          {paragraphs && <Paragraphs paragraphs={paragraphs} />}
        </div>
        {children}
      </div>
    </div>
  );
};

export default ColorSection;
