import React from "react";

const GreenSection = ({ title, description }) => {
  return (
    <div className="green-block">
      <div className="page-common-block">
        <h4 className="green-block-title">{title}</h4>
        <p className="green-block-description">{description}</p>
      </div>
    </div>
  );
};

export default GreenSection;
