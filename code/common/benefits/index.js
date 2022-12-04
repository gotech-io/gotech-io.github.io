import React from "react";

const Benefits = ({ benefits }) => {
  const { title, options } = benefits;
  return (
    <div className="benefits">
      <h4>{title}</h4>
      <div className="benefits-content">
        {options.map((option, i) => {
          const { title, description, src } = option;
          return (
            <div key={i} className="benefits-content-item">
              <lottie-player
                src={src}
                background="transparent"
                style={{ width: "80px", height: "80px", margin: "0 auto" }}
                speed="0.5"
                loop
                autoplay
              ></lottie-player>

              <p className="benefits-content-item-description text-description">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
