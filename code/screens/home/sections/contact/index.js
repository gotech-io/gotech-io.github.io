import Info from "./info";
import React from "react";
import { CONTACT } from "../../../../../assets/js/common/contact";

const Contact = ({ title, subTitle1, subTitle2, form, map }) => {
  const { EMAIL, ADDRESS } = CONTACT;
  return (
    <div className="contact flex-between">
      <aside className="indicator" id="contact"></aside>

      <div className="contact-bg"></div>
      <div className="contact-flex">
        <div className="contact-left">
          <Info
            title={title}
            subTitle1={subTitle1}
            subTitle2={subTitle2}
            email={EMAIL.content}
            address={ADDRESS.content}
          />

          <div className="map-wrapper">{map}</div>
        </div>
        {form}
      </div>
    </div>
  );
};

export default Contact;
