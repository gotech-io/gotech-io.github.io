import React from "react";
import animations from "../../../assets/js/animations";

function Careers({ header, devops, software, qa }) {
  return (
    <div className="careers" data-aos={animations.up}>
      {header}
      <div className="careers-flex">
        {devops}
        {software}
        {qa}
      </div>
    </div>
  );
}

export default Careers;
