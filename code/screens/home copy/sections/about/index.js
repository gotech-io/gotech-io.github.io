import React from "react";
import animations from "../../../../../assets/js/animations";

const About = ({ _body, images, title, sectionBtn }) => {
  return (
    <div className="home-about section">
      <div className="section-header" data-aos={animations.up}>
        <h5 className="section-title">{title}</h5>
        <section className="section-body">{_body}</section>
      </div>

      <aside className="indicator" id="about"></aside>

      {images}
    </div>
  );
};

export default About;
