import React from "react";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

function Careers({ header, jobs, _relativeURL, _ID }) {
  return (
    <div className="careers" data-aos={animations.up}>
      {header}
      <div className="careers-flex">{jobs}</div>
      <script
        type="module"
        src={handleUrl(`/assets/js/careers/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default Careers;
