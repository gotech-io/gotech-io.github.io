import React from "react";
import { PROJECTS_INFO } from "../../../../assets/js/common/content/case-studies-projects";

//import Link from "../../../common/btns/link";
//import Tags from "../../../common/tag";

function Right({ type }) {
  const { title, description, images, button, tags } = PROJECTS_INFO[type];
  const { url, btnText } = button;
  const { mockup } = images;
  return (
    <div className="case-studies flex-between">
      <div className="case-studies-wrapper">
        <div className="case-studies-content-right">
          <h5>{title}</h5>
          <p className="case-studies-content-description">{description}</p>

          <div className="case-studies-content-wrapper">
            {/* <Tags tags={tags} count="3" />
            <Link url={url} btnText={btnText} /> */}
          </div>
        </div>

        <div className="case-studies-image-right">
          <img src={mockup.src} alt={mockup.alt} />
        </div>
      </div>
    </div>
  );
}

export default Right;
