import React from "react";

const PointsSection = ({ intro }) => {
  return (
    <div className="services-intro">
      <div className="page-common-block">
        <h4>{intro.title}</h4>
        <p>{intro.description}</p>
      </div>

      <Points points={intro.points} />
    </div>
  );
};

export default PointsSection;
