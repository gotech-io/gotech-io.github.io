import React from "react";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

function Teams({ title, description, _relativeURL, _ID }) {
  return (
    <div className="about">
      <div className="about-intro">
        <h2 className="about-intro-title" data-aos={animations.up}>
          {title}
        </h2>
        <p className="about-intro-description" data-aos={animations.up}>
          {description}
        </p>
      </div>

      <script
        type="module"
        src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default Teams;
