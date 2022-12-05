import React from "react";
import { handleUrl } from "../../../utils";

function SingleCase({ title, description, _relativeURL, _ID }) {
  return (
    <div className="page-common">
      <div className="page-common-block">
        <h2 className="page-common-title">{title}</h2>
        <p className="page-common-description text-description">
          {description}
        </p>
      </div>

      <div className="page-common-sub-section"></div>
      <script
        type="module"
        src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default SingleCase;
