import React from "react";
import Technologies from "../../../../common/technologies";

const TechnologySection = ({ services }) => {
  const { title, description, technologies } = services;
  return (
    <div className="services-technology">
      <div className="page-common-block">
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>

        <Technologies technologies={technologies} />
      </div>
    </div>
  );
};

export default TechnologySection;
