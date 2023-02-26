import React from "react";
import { handleUrl } from "../../../utils";

const Comeet = ({ _ID, _relativeURL }) => {
  return (
    <div className="careers">
      <script
        type="module"
        src={handleUrl(`/assets/js/careers/index.js`, _relativeURL, _ID)}
      />
      <script type="comeet-careers"></script>
    </div>
  );
};

export default Comeet;
