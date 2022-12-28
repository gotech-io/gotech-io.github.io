import React from "react";

const Contact = ({ _body, form, map }) => {
  return (
    <div className="contact flex-between">
      <aside className="indicator" id="contact"></aside>

      <div className="contact-bg"></div>
      <div className="contact-flex">
        <div className="contact-left">
          {_body}
          <div className="map-wrapper">{map}</div>
        </div>
        {form}
      </div>
    </div>
  );
};

export default Contact;
