import React from "react";
import Image from "../../../../../common/img";
import { handleUrl } from "../../../../../utils";

const Slide = ({ _body, title, date, _relativeURL, _ID, image, platforms }) => {
  return (
    <li class="splide__slide slide-item">
      <Image src={handleUrl(image, _relativeURL, _ID)} />
      <div className="splide__slide-box">
        <aside>{date}</aside>
        <h3>{title}</h3>
        {_body}
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
      </div>
    </li>
  );
};

export default Slide;
