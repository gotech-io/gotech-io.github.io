import React from "react";

const Steps = ({ steps }) => {
  return (
    <div className="page-common-block">
      <div className="steps">
        {steps.length &&
          steps.map((step, i) => {
            return (
              <div key={step} className="steps-item">
                <span className="steps-item-number">{i + 1}</span>
                <p>{step}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Steps;
