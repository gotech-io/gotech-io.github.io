import React from "react";
import { images } from "../../../assets/js/images";

function Mockup({ image }) {
  if (image) {
    return <img src={image.src} alt={image.alt} />;
  }
  return <img src={images.common.default_mockup} alt="default_mockup" />;
}

export default Mockup;
