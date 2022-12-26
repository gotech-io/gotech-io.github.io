import React from "react";

const Step = ({ step, number }) => {
  return (
    <div key={step} className="steps-item">
      <span className="steps-item-number">{number}</span>
      <p>{step}</p>
    </div>
  );
};

export default Step;
