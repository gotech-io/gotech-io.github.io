import IntroductionSection from "./introductionSection";
import Mockup from "../../../common/mockup";
import React from "react";

function ProjectDetails({ main, introduction }) {
  return (
    <div className="page-common-block">
      <div className="page-common-content">
        <div className="main-wrapper-image">
          <Mockup image={main} />
        </div>
        <IntroductionSection introduction={introduction} />
      </div>
    </div>
  );
}

export default ProjectDetails;
