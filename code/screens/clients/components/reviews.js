import Grade from "./grade";
import Mockup from "../../../common/mockup";
import React from "react";
import animations from "../../../../assets/js/animations";

function Reviews({ title, description, color, range, clientName, image }) {
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

          <Grade
            color={color}
            range={range}
            clientName={clientName}
            image={image}
          />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
