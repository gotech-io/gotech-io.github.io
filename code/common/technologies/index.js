import React from "react";

const Technologies = ({ technologies }) => {
  return (
    <div className="page-common-block">
      <div className="technology">
        {technologies.length
          ? technologies.map((technology) => {
              // console.log({ technology });
              return (
                <div key={technology} className="technology-item">
                  <img
                    src="https://www.w3schools.com/images/lamp.jpg"
                    alt="technology"
                  />
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Technologies;
