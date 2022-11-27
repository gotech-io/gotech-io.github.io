import React from "react";
import animations from "../../../../../assets/js/animations";

const Contact = ({ _body, form, map }) => {
  return (
    <div className="contact flex-between">
      <aside className="indicator" id="contact"></aside>

      <div className="contact-bg">
        <div className="contact-info-cont">
          {_body}
          <div className="map-wrapper">{map}</div>
        </div>

        <div
          className="contact-info-cont"
          data-aos-anchor-placement="top-center"
          data-aos={animations.zoomInUp}
          data-aos-mirror="true"
          data-aos-once="false"
        >
          {form}
        </div>
      </div>
    </div>
  );
};

export default Contact;
