import React from "react";
import animations from "../../../../../assets/js/animations";

const Contact = ({ _body, form, map}) => {
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
          {_body}
          <div className="map-wrapper">
            {map}
          </div>
        </div>
        {form}
      </div>
    </div>
  );
};

export default Contact;
