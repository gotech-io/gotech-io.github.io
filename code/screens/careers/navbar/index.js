import React from "react";
import animations from "../../../../assets/js/animations";
import { images } from "../../../../assets/js/images";
import { handleUrl } from "../../../utils";
import Image from "../../../common/img";
const Navbar = ({ navigation, _relativeURL, _ID, mobileToggle }) => {
  return (
    <nav
      className="navbar fixed"
      data-aos-delay="400"
      data-aos={animations.down}
    >
      <div className="navbar-flex">
        <button className="navbar-mobile-toggle">
          <Image
            src={handleUrl(images.common.mobileToggle, _relativeURL, _ID)}
          />
        </button>
        <a href="/#" className="navbar-root-link">
          <Image
            src={handleUrl(images.common.logo, _relativeURL, _ID)}
            customClassName="navbar-logo"
          />
        </a>
        <section className="navbar-mobile-overlay"></section>
        {navigation}
      </div>
    </nav>
  );
};

export default Navbar;
