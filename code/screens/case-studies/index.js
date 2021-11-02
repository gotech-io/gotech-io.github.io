import React from "react";
import { handleUrl } from "../../utils";

function CaseStudies({ projects, _relativeURL, _ID }) {
  return (
    <div className="case-studies">
      {projects}
      <script
        type="module"
        src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default CaseStudies;
