import React from "react";
import animations from "../../../../../assets/js/animations";
import Loader from "../../../../common/loader";

const Contact = ({
  inputs,
  _body,

  submit_value,
}) => {
  return (
    <div className="contact flex-between" id="contact">
      <div className="contact-bg"></div>
      <div className="contact-flex">
        <div
          className="contact-left"
          data-aos-anchor-placement="top-center"
          data-aos={animations.fadeRight}
        >
          {_body}
        </div>
        <form
          className="contact-form"
          data-aos-anchor-placement="top-center"
          data-aos={animations.up}
        >
          {inputs}
          <section className="contact-form-submit">
            <input type="submit" value={submit_value} className="submit" />
            <Loader customClassName="contact-loader" />
          </section>
        </form>
      </div>
    </div>
  );
};

export default Contact;
