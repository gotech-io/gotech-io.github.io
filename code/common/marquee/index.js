import React from "react";

function Marquee({ marquee }) {
  return (
    <div className="marquee-wrapper">
      <div className="marquee">
        <div className="marquee-group">
          {marquee.map((src) => {
            return (
              <div key={src} className="marquee-item">
                <img src={src} alt="client images" />
              </div>
            );
          })}
        </div>

        <div aria-hidden="true" className="marquee-group">
          {marquee.map((src) => {
            return (
              <div key={src} className="marquee-item">
                <img src={src} alt="client images" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Marquee;
