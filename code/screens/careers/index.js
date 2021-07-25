import React from "react";
import animations from "../../../assets/js/animations";

function Careers({ header, developers, qa, devops }) {
  return (
    <div className="careers" data-aos={animations.up}>
      {header}
      <div className="careers-jobs">
        {developers}
        {qa}
        {devops}
      </div>
    </div>
  );
}

export default Careers;
