import Diagram from "../../../../common/diagram";
import React from "react";

const DiagramSection = ({ diagram }) => {
  return (
    <div className="services-diagram">
      <div className="page-common-block">
        <h4>{diagram.title}</h4>
        <p>{diagram.description}</p>

        <div className="services-diagram-wrapper">
          <Diagram />
        </div>
      </div>
    </div>
  );
};

export default DiagramSection;
