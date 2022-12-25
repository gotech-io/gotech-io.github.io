import Mockup from "../../../common/mockup";
import Range from "../../../common/range";
import React from "react";
import animations from "../../../../assets/js/animations";

function Left({ title, description, color, range, clientName }) {
  return (
    <div className="reviews flex-between">
      <div className="page-common-block reviews-wrapper">
        <div className="reviews-image-left">
          <Mockup />
        </div>

        <div
          className="reviews-content-left"
          data-aos-anchor-placement="top-center"
          data-aos={animations?.fadeLeft}
        >
          <h5>{title}</h5>
          <p className="reviews-content-description">{description}</p>

          <div className="flex-between">
            <Range color={color} range={range} />
            <div>{clientName}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
