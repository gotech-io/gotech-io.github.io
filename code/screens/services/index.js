import React from "react";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

function Services({ title, _relativeURL, _ID }) {
  return (
    <div>
      {title}

      <script
        type="module"
        src={handleUrl(`/assets/js/services/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default Services;
