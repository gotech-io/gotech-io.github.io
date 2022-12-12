import Header from "../../common/header";
import React from "react";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

function CaseStudies({ title, description, projects, _relativeURL, _ID }) {
  return (
    <div>
      <Header title={title} description={description} />

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
        src={handleUrl(`/assets/js/screens/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default CaseStudies;
