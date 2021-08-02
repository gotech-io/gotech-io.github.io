import React from "react";
import animations from "../../../../assets/js/animations";

function CareersList({ careers, _body }) {
  return (
    <div className="about-careers" data-aos={animations.up}>
      <div className="about-careers-header">{_body}</div>
      {careers}
    </div>
  );
}

export default CareersList;
