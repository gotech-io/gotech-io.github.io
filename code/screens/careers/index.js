import Benefits from "../../common/benefits";
import Positions from "./positions";
import React from "react";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

function Careers({
  title,
  description,
  benefits,
  positions,
  locations,
  _relativeURL,
  _ID,
}) {
  return (
    // <div className="careers" data-aos={animations.up}>
    //   {header}

    //   <script
    //     type="module"
    //     src={handleUrl(`/assets/js/careers/index.js`, _relativeURL, _ID)}
    //   />
    //   <script type="comeet-careers"></script>
    // </div>
    <div className="page-common">
      <div className="page-common-block">
        <h2 className="page-common-title" data-aos={animations.up}>
          {title}
        </h2>
        <p className="page-common-description" data-aos={animations.up}>
          {description}
        </p>

        <div className="page-common-content">
          <Benefits benefits={benefits} />
        </div>
      </div>

      <div className="page-common-content">
        <Positions positions={positions} />
      </div>

      <script
        type="module"
        src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default Careers;
