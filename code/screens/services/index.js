import React from "react";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

function Services({ _relativeURL, _ID }) {
  return (
    <div className="about">
      services
      <script
        type="module"
        src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default Services;
