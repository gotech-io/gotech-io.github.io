import React from "react";

const ColorSection = ({ color, title, description, paragraphs, children }) => {
  return (
    <div className={color}>
      <div className="color-block">
        <div className="page-common-block">
          <h4 className="color-block-title">{title}</h4>
          {description && (
            <p className="color-block-description">{description}</p>
          )}

          <div className="color-block-paragraphs">
            {paragraphs &&
              paragraphs.map((par, i) => {
                return (
                  <p key={i} className="color-block-description">
                    {par}
                  </p>
                );
              })}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default ColorSection;
