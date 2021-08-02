import React from "react";
import animations from "../../../assets/js/animations";

function About({ sections, careers }) {
  return (
    <div className="about">
      <h1 className="about-title" data-aos={animations.up}>
        We are GoTech
      </h1>
      <div className="about-grid">
        <h4 className="about-grid-title">Our story</h4>
        <div className="about-grid-flex">{sections}</div>
      </div>
      {careers}
    </div>
  );
}

export default About;
