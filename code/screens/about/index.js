import React from "react";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

function About({ _relativeURL, _ID }) {
  return (
    <div className="about">
      About
      <script
        type="module"
        src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default About;
