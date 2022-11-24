import Image from "../../../../../common/img";
import React from "react";
import animations from "../../../../../../assets/js/animations";

const Images = ({ _relativeURL, _ID, image1, image2, image3, image4 }) => {
  const createRelativeURL = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="home-about-images images-flex">
      <div className="images-flex-1 images-flex-section">
        <Image src={createRelativeURL(image1)} />
        <Image src={createRelativeURL(image2)} />
      </div>
      <div className="images-flex-2 images-flex-section">
        <Image src={createRelativeURL(image3)} />
      </div>
    </div>
  );
};

export default Images;
