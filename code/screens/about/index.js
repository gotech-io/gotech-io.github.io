import Left from "../../common/gallery/left";
import React from "react";
import Right from "../../common/gallery/right";
import Video from "../../common/video";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

function About({ title, description, videoList, gallery, _relativeURL, _ID }) {
  return (
    <div className="page-common">
      <div className="page-common-block">
        <h2 className="page-common-title" data-aos={animations.up}>
          {title}
        </h2>
        <p
          className="page-common-description text-description"
          data-aos={animations.up}
        >
          {description}
        </p>

        <div className="page-common-content">
          <Video videoList={videoList} />
        </div>
      </div>

      <div className="about-story">
        <h4 className="about-story-title" data-aos={animations.up}>
          Our Everyday life:
        </h4>

        <div className="about-story-wrapper">
          {gallery.map(({ src, description }, i) => {
            if (i % 2 === 0) {
              return (
                <Left
                  key={i}
                  src={src}
                  description={description}
                  data-aos-anchor-placement="top-center"
                  data-aos={animations.fadeLeft}
                />
              );
            }
            return (
              <Right
                key={i}
                src={src}
                description={description}
                data-aos-anchor-placement="top-center"
                data-aos={animations.fadeRight}
              />
            );
          })}
        </div>
      </div>
      <script
        type="module"
        src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default About;
