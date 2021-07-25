import React from "react";
import animations from "../../../../../assets/js/animations";

const About = ({ _body, images }) => {
  return (
    <div id="about" className="home-about section">
      <div className="home-about-text" data-aos={animations.up}>
        {_body}
      </div>
      {images}
    </div>
  );
};

export default About;
