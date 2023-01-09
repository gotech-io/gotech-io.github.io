import React from "react";

const Step = ({ step, number, color = "green" }) => {
  return (
    <div key={step} className="steps-item">
      <span className={`steps-item-number ${color}`}>{number}</span>
      <p>{step}</p>
    </div>
  );
};

export default Step;
