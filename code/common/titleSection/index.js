import React from "react";

const TitleSection = ({ title, description }) => {
  return (
    <div className="page-common-block">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default TitleSection;
