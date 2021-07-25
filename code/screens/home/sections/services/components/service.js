import React from "react";
import animations from "../../../../../../assets/js/animations";

const Service = ({ _body, delay = 0 }) => {
  return (
    <section
      className="home-services-list-item"
      data-aos={animations.up}
      data-aos-delay={delay}
    >
      {_body}
    </section>
  );
};

export default Service;
