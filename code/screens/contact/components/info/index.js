import React from "react";
import animations from "../../../../../assets/js/animations";

const Info = ({ body, form, map }) => {
  return (
    <div className="contact flex-between">
      <aside className="indicator" id="contact"></aside>

      <div className="contact-bg"></div>
      <div className="contact-flex">
        <div
          className="contact-left"
          data-aos-anchor-placement="top-center"
          data-aos={animations.fadeRight}
        >
          {body}
          <div className="map-wrapper">{map}</div>
        </div>
        {form}
      </div>
    </div>
  );
};

export default Info;
