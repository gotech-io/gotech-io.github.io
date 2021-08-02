import React from "react";
import animations from "../../../../../assets/js/animations";

const CaseStudies = ({ slides, title, _body }) => {
  return (
    <div className="home-case-studies section" data-aos={animations.up}>
      <div className="section-header">
        <h5 className="section-title">{title}</h5>
        <section className="section-body">{_body}</section>
      </div>
      <aside className="indicator" id="case-studies"></aside>
      <div className="home-case-studies-content">
        <div class="splide home-case-studies-slider">
          <div class="splide__track">
            <ul class="splide__list">
              {slides &&
                slides.map((slide) => {
                  return slide;
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
