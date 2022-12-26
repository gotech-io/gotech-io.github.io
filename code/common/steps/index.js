import React from "react";
import Step from "../step";

const Steps = ({ steps }) => {
  return (
    <div className="steps">
      {steps.length &&
        steps.map((step, i) => {
          return <Step key={step} step={step} number={i + 1} />;
        })}
    </div>
  );
};

export default Steps;
