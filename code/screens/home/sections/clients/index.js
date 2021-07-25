import React from "react";
import animations from "../../../../../assets/js/animations";

const Clients = ({ clients, _body }) => {
  return (
    <div className="home-clients section" id="clients">
      <div className="home-clients-grid">
        <div
          data-aos={animations.fadeRight}
          className="home-clients-top"
          data-aos-delay="100"
        >
          {_body}
        </div>
        {clients}
      </div>
    </div>
  );
};

export default Clients;
