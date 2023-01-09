import React from "react";
import Step from "../step";

const Steps = ({ steps }) => {
  return (
    <div className="page-common-block">
      <div className="steps">
        {steps.length &&
          steps.map((step, i) => {
            return <Step key={step} step={step} number={i + 1} />;
          })}
      </div>
    </div>
  );
};

export default Steps;
