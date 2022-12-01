import React from "react";

const Benefits = ({ benefits }) => {
  const { title, options } = benefits;
  return (
    <div className="benefits">
      <h4>{title}</h4>
      <div className="benefits-content">
        {options.map((option, i) => {
          const { title, description } = option;
          return (
            <div key={i} className="benefits-content-item">
              <div className="benefits-content-item-icon">AA</div>
              <p className="benefits-content-item-description text-small">
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
