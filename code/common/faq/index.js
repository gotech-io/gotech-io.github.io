import React from "react";
import Step from "../step";
import { FAQ } from "../../../assets/js/common/faq";

const Question = () => {
  return (
    <div className="page-common-block">
      <div className="faq-wrapper">
        {FAQ.length &&
          FAQ.map((item, i) => {
            return (
              <div key={item.question} className="faq-wrapper-item">
                <Step step={item.question} number={i + 1} />
                <p className="faq-wrapper-item-answer">{item.answer}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Question;
