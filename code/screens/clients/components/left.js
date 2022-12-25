import Mockup from "../../../common/mockup";
import React from "react";
import animations from "../../../../assets/js/animations";

function Left() {
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
          <h5>{"ghfgcfhjkl"}</h5>
          <p className="reviews-content-description">
            {"khjgcfxjkl ghgffgkilvklf gbffjhgdjfvhdkf hvdgvjhdh"}
          </p>

          <div className="flex-between">
            <div>1 2 3 4 5</div>
            <div>Name Name</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
