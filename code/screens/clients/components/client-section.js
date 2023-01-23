import Mockup from "../../../common/mockup";
import React from "react";
import animations from "../../../../assets/js/animations";

function ClientSection({ title, description, image, reverse }) {
  return (
    <div className="client-section flex-between">
      <div
        className="client-section-wrapper"
        style={{ flexDirection: reverse && "row-reverse" }}
      >
        <div className="client-section-image-item">
          <Mockup />
        </div>

        <div
          className="client-section-content-item"
          style={{ left: reverse && 0 }}
          data-aos-anchor-placement="top-center"
          data-aos={animations?.zoomIn}
        >
          <h3>{title}</h3>
          <p className="grey-box-description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ClientSection;
