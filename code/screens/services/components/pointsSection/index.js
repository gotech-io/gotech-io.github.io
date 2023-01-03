import Points from "../../../../common/points";
import React from "react";
import TitleSection from "../../../../common/titleSection";

const PointsSection = ({ intro }) => {
  return (
    <div className="services-intro">
      <TitleSection title={intro.title} description={intro.description} />
      <Points points={intro.points} />
    </div>
  );
};

export default PointsSection;
