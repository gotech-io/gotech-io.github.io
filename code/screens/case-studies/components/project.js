import React from "react";
import Image from "../../../common/img";
import { handleUrl } from "../../../utils";

function Project({ image, _body, _relativeURL, _ID, background }) {
  return (
    <div className="case-studies-project flex">
      <Image
        customClassName="case-studies-project-image"
        src={handleUrl(image, _relativeURL, _ID)}
      />
      <div className="case-studies-project-body">{_body}</div>
    </div>
  );
}

export default Project;
