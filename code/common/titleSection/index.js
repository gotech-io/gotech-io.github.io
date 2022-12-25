import React from "react";

const TitleSection = ({ title, description }) => {
  return (
    <div className="page-common-block title-section">
      <h4>{title}</h4>
      {description && <p>{description}</p>}
    </div>
  );
};

export default TitleSection;
