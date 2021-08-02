import React from "react";
import OtherWorks from "../../../../../common/btns/other-works";
import Image from "../../../../../common/img";
import { handleUrl } from "../../../../../utils";

const Slide = ({
  _body,
  title,
  _relativeURL,
  _ID,
  image,
  platforms,
  linkUrl,
}) => {
  return (
    <li class="splide__slide slide-item">
      <Image
        customClassName="slide-item-image"
        src={handleUrl(image, _relativeURL, _ID)}
      />
      <div className="slide-item-box">
        <h3 className="slide-item-title">{title}</h3>
        <div className="slide-item-body">{_body}</div>
        {platforms ? (
          <div className="slide-item-platforms">
            {platforms.map((platform) => {
              return (
                <section>
                  <img src={handleUrl(platform.img, _relativeURL, _ID)} />
                  <p>{platform.name}</p>
                </section>
              );
            })}
          </div>
        ) : (
          ""
        )}
        <OtherWorks url={linkUrl} />
      </div>
    </li>
  );
};

export default Slide;
