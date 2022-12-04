import Link from "../../../common/btns/link";
import React from "react";

function Left({ title, description, image, button, tags }) {
  const { url, btnText } = button;
  const { src, alt } = image;
  return (
    <div className="case-studies flex-between">
      <div className="case-studies-wrapper">
        <div className="case-studies-image">
          <img className="left" src={src} alt={alt} />
        </div>
        <div className="case-studies-content">
          <h5>{title}</h5>
          <p className="case-studies-content-description">{description}</p>

          <div className="case-studies-content-wrapper">
            <div className="case-studies-content-wrapper-tags">
              {tags.length &&
                tags.map((tag, i) => {
                  return (
                    <div
                      key={i}
                      className="case-studies-content-wrapper-tags-item"
                    >
                      {tag}
                    </div>
                  );
                })}
            </div>
            <Link url={url} btnText={btnText} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
