import Paragraphs from "./paragraphs";
import React from "react";
import TitleSection from "../titleSection";

const ColorSection = ({ color, title, description, paragraphs, children }) => {
  return (
    <div className={color}>
      <div className="color-block">
        <div className="page-common-block">
          {title && <TitleSection title={title} description={description} />}
          {paragraphs && <Paragraphs paragraphs={paragraphs} />}
        </div>
        {children}
      </div>
    </div>
  );
};

export default ColorSection;
