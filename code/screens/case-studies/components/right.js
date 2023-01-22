import GreyBox from "../../../common/greyBox";
import Mockup from "../../../common/mockup";
import React from "react";
import animations from "../../../../assets/js/animations";
import { PROJECTS_INFO } from "../../../../assets/js/common/case-studies-projects";

function Right({ type }) {
  const { title, description, images, link, tags } = PROJECTS_INFO[type];

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
            <GreyBox
              title={title}
              description={description}
              tags={tags}
              link={link}
            />
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
