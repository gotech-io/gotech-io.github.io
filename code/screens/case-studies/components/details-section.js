import IntroductionSection from "./introduction-section";
import Mockup from "../../../common/mockup";
import React from "react";

function DetailsSection({ main, introduction, tags }) {
  return (
    <div className="page-common-block">
      <div className="page-common-content">
        <div className="main-wrapper-image">
          <Mockup image={main} />
        </div>
        <IntroductionSection introduction={introduction} tags={tags} />
      </div>
    </div>
  );
}

export default DetailsSection;
