import Grade from "./grade";
import Mockup from "../../../common/mockup";
import React from "react";
import animations from "../../../../assets/js/animations";

function Reviews({
  title,
  description,
  color,
  range,
  clientName,
  image,
  reverse,
}) {
  return (
    <div className="reviews flex-between">
      <div
        className="reviews-wrapper"
        style={{ flexDirection: reverse && "row-reverse" }}
      >
        <div className="reviews-image-item">
          <Mockup />
        </div>

        <div
          className="reviews-content-item"
          style={{ left: reverse && 0 }}
          data-aos-anchor-placement="top-center"
          data-aos={animations?.zoomIn}
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
