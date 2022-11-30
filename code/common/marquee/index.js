import React from "react";

function Marquee({ marquee }) {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {marquee.map((src, i) => {
          return (
            <span key={i} className="marquee-item">
              <img src={src} alt="client images" />
            </span>
          );
        })}
      </div>
      <div className="marquee delay ">
        {marquee.map((src, i) => {
          return (
            <span key={i} className="marquee-item">
              <img src={src} alt="client images" />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Marquee;

// <div classNameName="clients">
//   <ul classNameName="clients-list">
//     {marquee.map((src, i) => {
//       return (
//         <div key={i} classNameName="clients-list-item">
//           <img src={src} alt="client images" />
//         </div>
//       );
//     })}
//   </ul>
// </div>
