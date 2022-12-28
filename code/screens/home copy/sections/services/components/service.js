import React from "react";
import animations from "../../../../../../assets/js/animations";
import Image from "../../../../../common/img";
import { handleUrl } from "../../../../../utils";

const Service = ({ _body, title, image, delay = 0, _relativeURL, _ID }) => {
  return (
    <section
      className="home-services-list-item"
      data-aos={animations.up}
      data-aos-delay={delay}
    >
      <div className="home-services-list-item-title">
        <Image src={handleUrl(image, _relativeURL, _ID)} />
        <h4>{title}</h4>
      </div>
      <div className="home-services-list-item-body">{_body}</div>
    </section>
  );
};

export default Service;
