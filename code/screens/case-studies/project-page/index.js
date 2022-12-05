import React from "react";
import { PROJECTS_INFO } from "../../../../assets/js/case-studies/projects-info";
import { handleUrl } from "../../../utils";

function SingleCase({ type, _relativeURL, _ID }) {
  const { title, description, image } = PROJECTS_INFO[type];
  const { src, alt } = image;
  return (
    <div className="page-common">
      <div className="page-common-block">
        <h2 className="page-common-title">{title}</h2>
        <p className="page-common-description text-description">
          {description}
        </p>
        <div className="page-common-content">
          <img src={src} alt={alt} />
        </div>
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
