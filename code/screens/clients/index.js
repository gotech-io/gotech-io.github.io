import React from "react";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

function Clients({ title, description, _relativeURL, _ID }) {
  return (
    <div className="page-common">
      <div className="page-common-block">
        <h2 className="page-common-title" data-aos={animations.up}>
          {title}
        </h2>
        <p
          className="page-common-description text-description"
          data-aos={animations.up}
        >
          {description}
        </p>

        <div className="page-common-content"></div>
      </div>

      <script
        type="module"
        src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default Clients;
