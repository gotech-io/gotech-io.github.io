import React from "react";
import { handleUrl } from "../../utils";

function Services({ _relativeURL, _ID }) {
  return (
    <div className="case-studies">
      Services
      <script
        type="module"
        src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default Services;
