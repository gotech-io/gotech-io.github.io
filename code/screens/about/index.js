import React from "react";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

function About({
  title,
  description,
  videoList,
  sections,
  careers,
  topImage,
  _relativeURL,
  _ID,
  team,
}) {
  return (
    // <div className="about">
    //   <div className="about-grid">
    //     <h1 className="about-title" data-aos={animations.up}>
    //       We are GoTech
    //     </h1>
    //     <img
    //       src={handleUrl(topImage, _relativeURL, _ID)}
    //       className="about-top-image"
    //     />
    //     <h4 className="about-grid-title">Our story</h4>
    //     <div className="about-grid-flex">{sections}</div>
    //     {team}
    //   </div>
    //   {careers}
    //   <script
    //     type="module"
    //     src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
    //   />
    // </div>

    <div className="about">
      <div className="about-intro">
        <h2 className="about-intro-title" data-aos={animations.up}>
          {title}
        </h2>
        <p className="about-intro-description" data-aos={animations.up}>
          {description}
        </p>

        <video className="about-intro-video" controls data-aos={animations.up}>
          {videoList.map(({ src, type }) => {
            return <source src={src} type={type} />;
          })}
        </video>
      </div>

      <div className="about-story">
        <h4 className="about-story-title" data-aos={animations.up}>
          our story
        </h4>

        <div className="about-story-gallery">
          <div className="about-story"></div>
          <div className="about-story"></div>
        </div>
      </div>

      <script
        type="module"
        src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default About;
