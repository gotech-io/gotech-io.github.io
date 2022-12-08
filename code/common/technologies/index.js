import React from "react";

const Technologies = ({ technologies }) => {
  return (
    <div className="technology">
      {technologies.length
        ? technologies.map((technology) => {
            return (
              <div key={technology.key} className="technology-stack">
                {technology.icons.length && (
                  <div>
                    <h5>{technology.key}</h5>
                    <div className="technology-list">
                      {technology.icons.map((icon, i) => {
                        return (
                          <div key={i} className="technology-item">
                            {/* <img url={icon} alt="technology" /> */}
                            {i}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Technologies;
