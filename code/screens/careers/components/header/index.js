import React from "react";
import animations from "../../../../../assets/js/animations";

function Header({ _body }) {
  return (
    <div className="careers-header" data-aos={animations.up}>
      <div className="w-container w-padding">
        <section className="careers-header-content">{_body}</section>
      </div>
    </div>
  );
}

export default Header;
