import React from "react";
import Image from "../../../common/img";
import { handleUrl } from "../../../utils";

function SmallSection({ image, _relativeURL, _ID, title, _body }) {
  return (
    <div className="about-grid-section-small">
      {image && <Image src={handleUrl(image, _relativeURL, _ID)} />}
      <div
        className={
          image
            ? "about-grid-section-small-text about-grid-section-small-text-half"
            : "about-grid-section-small-text about-grid-section-small-text-full"
        }
      >
        <h5>{title}</h5>
        {_body}
      </div>
    </div>
  );
}

export default SmallSection;
