import React from "react";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

function Careers({ header, jobs, _relativeURL, _ID }) {
  return (
    <div className="careers" data-aos={animations.up}>
      {header}
     
      <script
        type="module"
        src={handleUrl(`/assets/js/careers/index.js`, _relativeURL, _ID)}
      />
      <script type="comeet-careers"></script>  
    </div>
  );
}

export default Careers;
