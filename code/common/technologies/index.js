import React from "react";

const Technologies = ({ technologies }) => {
  return (
    <div className="technology">
      {technologies.length &&
        technologies.map((technology) => {
          return (
            <div key={technology.key} className="technology-languages">
              <h5>{technology.key}</h5>

              {technology.icons.length &&
                technology.icons.map((icon, i) => {
                  return (
                    <div key={i} className="technology-item">
                      <img url={icon} alt="technology" />
                    </div>
                  );
                })}
            </div>
          );
        })}
    </div>
  );
};

export default Technologies;
