import React from "react";
import animations from "../../../assets/js/animations";

function Careers({ header, jobs }) {
  return (
    <div className="careers" data-aos={animations.up}>
      {header}
      <div className="careers-flex">{jobs}</div>
    </div>
  );
}

export default Careers;
