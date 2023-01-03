import Link from "../../../common/btns/link";
import Mockup from "../../../common/mockup";
import React from "react";
import Tags from "../../../common/tag";
import animations from "../../../../assets/js/animations";
import { PROJECTS_INFO } from "../../../../assets/js/common/case-studies-projects";

function Left({ type }) {
  const { title, description, images, button, tags } = PROJECTS_INFO[type];
  const { url, btnText } = button;
  const { mockup } = images;
  return (
    <div className="case-studies flex-between">
      <div className="page-common-block case-studies-wrapper">
        <div className="case-studies-image-left">
          <Mockup image={mockup} />
        </div>

        <div
          className="case-studies-content-left"
          data-aos-anchor-placement="top-center"
          data-aos={animations?.zoomUp}
        >
          <h5>{title}</h5>
          <p className="case-studies-content-description">{description}</p>

          <div className="case-studies-content-wrapper">
            <Tags tags={tags} count="3" />
            <Link url={url} btnText={btnText} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
