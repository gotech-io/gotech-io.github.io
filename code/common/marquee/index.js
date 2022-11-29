import React from "react";

function Marquee({ marquee }) {
  return (
    <div className="marquee-wrapper">
      <marquee>
        <div className="flex-between">
          {marquee.map((src, i) => {
            return (
              <div key={i} className="home-clients-list-item">
                <img src={src} alt="client images" />
              </div>
            );
          })}
        </div>
      </marquee>
    </div>
  );
}

export default Marquee;
