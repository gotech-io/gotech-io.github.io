import BlobButton from "../../../../common/btns/blob";
import Link from "../../../../common/btns/link";
import React from "react";
import animations from "../../../../../assets/js/animations";

const Clients = ({ clients, link, _body, title }) => {
  return (
    <div className="home-clients section">
      <div className="section-header" data-aos={animations.up}>
        <h5 className="section-title">{title}</h5>
        <section className="section-body">{_body}</section>
      </div>

      <aside className="indicator" id="clients"></aside>
      <div className="home-clients-grid">{clients}</div>

      <div className="page-common-block home-clients-btn">
        <Link url={link} btnText={"More"} />
      </div>
    </div>
  );
};

export default Clients;
