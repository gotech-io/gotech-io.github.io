import React from "react";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

function About({ sections, careers, topImage, _relativeURL, _ID, team }) {
  return (
    <div className="about">
      <div className="about-grid">
        <h1 className="about-title" data-aos={animations.up}>
          We are GoTech
        </h1>
        <img
          src={handleUrl(topImage, _relativeURL, _ID)}
          className="about-top-image"
        />
        <h4 className="about-grid-title">Our story</h4>
        <div className="about-grid-flex">{sections}</div>
        {team}
      </div>
      {careers}
    </div>
  );
}

export default About;
