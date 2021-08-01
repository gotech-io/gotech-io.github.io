import React from "react";
import animations from "../../../../../assets/js/animations";

function Header({ _body }) {
  return (
    <div className="careers-header" data-aos={animations.up}>
      <section className="careers-header-content">{_body}</section>
    </div>
  );
}

export default Header;
