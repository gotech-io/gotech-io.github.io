import Paragraphs from "./paragraphs";
import React from "react";

const ColorSection = ({ color, title, description, paragraphs, children }) => {
  return (
    <div className={color}>
      <div className="color-block">
        <div className="page-common-block">
          <h4>{title}</h4>
          {description && <p>{description}</p>}

          {paragraphs && <Paragraphs paragraphs={paragraphs} />}

          {children}
        </div>
      </div>
    </div>
  );
};

export default ColorSection;
