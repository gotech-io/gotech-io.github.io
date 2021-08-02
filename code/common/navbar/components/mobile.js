import React from "react";
import { images } from "../../../../assets/js/images";
import { handleUrl } from "../../../utils";
import Image from "../../img";

function Mobile({ _relativeURL, _ID }) {
  return (
    <button className="navbar-mobile-toggle">
      <Image src={handleUrl(images.common.mobileToggle, _relativeURL, _ID)} />
    </button>
  );
}

export default Mobile;
