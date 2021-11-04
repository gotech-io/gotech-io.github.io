import React from "react";
import animations from "../../../assets/js/animations";
import { images } from "../../../assets/js/images";

import Image from "../../common/img";
import { handleUrl } from "../../utils";

const Navbar = ({
  navigation,
  _relativeURL,
  _ID,
  contactLink,
  mobileToggle,
}) => {
  return (
    <nav className="navbar fixed" data-aos={animations.down}>
      <div className="navbar-flex">
        {mobileToggle}
        <a href="/#" className="navbar-root-link">
          <Image
            src={handleUrl(images.common.logo, _relativeURL, _ID)}
            customClassName="navbar-logo"
          />
        </a>
        <section className="navbar-mobile-overlay"></section>
        {navigation}
        <span className="navbar-desktop-contact">{contactLink}</span>
      </div>
    </nav>
  );
};

export default Navbar;
