import React from "react";
import animations from "../../../../../assets/js/animations";

const CaseStudies = ({ slides }) => {
  return (
    <div
      className="home-case-studies section"
      id="case-studies"
      data-aos={animations.up}
    >
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
