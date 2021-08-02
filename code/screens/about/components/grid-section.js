import React from "react";
import animations from "../../../../assets/js/animations";

function AboutGridSection({ bigSide, smallSide }) {
  return (
    <div className="about-grid-section flex" data-aos={animations.up}>
      {bigSide}
      {smallSide}
    </div>
  );
}

export default AboutGridSection;
