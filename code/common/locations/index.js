import React from "react";

const Locations = ({ locations }) => {
  const { title, options } = locations;
  return (
    <div className="locations">
      <h4>{title}</h4>
      <div className="locations-content">
        {options.map((option, i) => {
          const { title, location } = option;
          return (
            <div key={i} className="locations-content-item">
              <div>
                <h6>{title}</h6>
                <p className="locations-content-item-description">{location}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Locations;
