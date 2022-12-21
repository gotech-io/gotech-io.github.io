import React from "react";

const Technologies = ({ technologies }) => {
  return (
    <div className="page-common-block">
      <div className="technology">
        {technologies.length
          ? technologies.map(({ title, icon }) => {
              return (
                <div key={title} className="technology-item">
                  <img src={icon} alt="technology" />
                  <p>{title}</p>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Technologies;
