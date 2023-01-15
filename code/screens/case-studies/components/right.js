import BlobButton from "../../../common/btns/blob";
import Mockup from "../../../common/mockup";
import React from "react";
import Tags from "../../../common/tags";
import animations from "../../../../assets/js/animations";
import { PROJECTS_INFO } from "../../../../assets/js/common/case-studies-projects";

function Right({ type }) {
  const { title, description, images, button, tags } = PROJECTS_INFO[type];
  const { url, btnText } = button;
  const { mockup } = images;
  return (
    <div className="case-studies flex-between">
      <div className="page-common-block">
        <div className="case-studies-wrapper">
          <div
            className="case-studies-content-right"
            data-aos-anchor-placement="top-center"
            data-aos={animations?.zoomUp}
          >
            <h3>{title}</h3>
            <p className="case-studies-content-description">{description}</p>

            <div className="case-studies-content-wrapper">
              <Tags tags={tags} count="2" />
              <BlobButton link={url} btnText={btnText} />
            </div>
          </div>

          <div className="case-studies-image-right">
            <Mockup image={mockup} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
