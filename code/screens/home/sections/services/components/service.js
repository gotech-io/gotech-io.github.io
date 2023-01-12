import React from "react";
import animations from "../../../../../../assets/js/animations";

const Service = ({ _body, title, delay = 0 }) => {
  return (
    <section
      className="home-services-list-item"
      data-aos={animations.up}
      data-aos-delay={delay}
    >
      <div className="home-services-list-item-title">
        <h4>{title}</h4>
      </div>
      <div className="home-services-list-item-body">{_body}</div>
    </section>
  );
};

export default Service;
