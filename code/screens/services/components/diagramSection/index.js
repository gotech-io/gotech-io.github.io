import Diagram from "../../../../common/diagram";
import React from "react";
import TitleSection from "../../../../common/titleSection";

const DiagramSection = ({ diagram }) => {
  return (
    <div className="services-diagram">
      <div className="page-common-block">
        <TitleSection title={diagram.title} description={diagram.description} />
        <div className="services-diagram-wrapper">
          <Diagram />
        </div>
      </div>
    </div>
  );
};

export default DiagramSection;
