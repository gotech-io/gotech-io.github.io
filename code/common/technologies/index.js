import React from "react";

const Technologies = ({ technologies }) => {
  return (
    <div className="technology">
      {technologies.length
        ? technologies.map((technology) => {
            return (
              <div key={technology} className="technology-item">
                <img
                  src="https://www.w3schools.com/images/lamp.jpg"
                  alt="technology"
                />
              </div>
            );
            // return (
            //   <div key={technology.key}>
            //     {technology.icons.length ? (
            //       <div className="technology-stack">
            //         <h5>{technology.key}</h5>
            //         <div className="technology-list">
            //           {technology.icons.map((icon, i) => {
            //             return (
            //               <div key={i} className="technology-item">
            //                 <img src={icon} alt="technology" />
            //               </div>
            //             );
            //           })}
            //         </div>
            //       </div>
            //     ) : (
            //       ""
            //     )}
            //   </div>
            // );
          })
        : ""}
    </div>
  );
};

export default Technologies;
