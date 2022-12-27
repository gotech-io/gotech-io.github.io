import React from "react";

const TitleSection = ({ title, description }) => {
  return (
    <div className="page-common-block">
      <h4 className="color-block-title">{title}</h4>
      {description && <p className="color-block-description">{description}</p>}
    </div>
  );
};

export default TitleSection;
