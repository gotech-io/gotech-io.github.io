import Image from "../../img";
import React from "react";
import { images } from "../../../../assets/js/images";
import { handleUrl } from "../../../utils";

function Mobile({ _relativeURL, _ID }) {
  return (
    <button className="navbar-mobile-toggle">
      <i className="fa-solid fa-ellipsis-vertical"></i>
      {/* <Image src={handleUrl(images.common.mobileToggle, _relativeURL, _ID)} /> */}
    </button>
  );
}

export default Mobile;
