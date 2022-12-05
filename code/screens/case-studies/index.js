import Left from "./components/left";
import React from "react";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

function CaseStudies({
  title,
  subTitle,
  description,
  projects,
  _relativeURL,
  _ID,
}) {
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
      </div>

      <div className="page-common-sub-section">
        <div className="about-story-wrapper">
          {projects.length ? (
            projects.map((project, i) => {
              return <div key={i}>{project}</div>;
            })
          ) : (
            <div>Right now we don't have a new examples for you!</div>
          )}
        </div>
      </div>
      <script
        type="module"
        src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default CaseStudies;
