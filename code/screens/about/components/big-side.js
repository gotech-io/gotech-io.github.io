import React from "react";
import Image from "../../../common/img";
import { handleUrl } from "../../../utils";

function BigSide({ image, _relativeURL, _ID }) {
  return (
    <div className="about-grid-section-big">
      <Image src={handleUrl(image, _relativeURL, _ID)} />
    </div>
  );
}

export default BigSide;
