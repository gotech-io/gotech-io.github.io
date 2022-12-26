import React from "react";
import Step from "../step";
import animations from "../../../assets/js/animations";
import { FAQ } from "../../../assets/js/common/faq";

const Question = ({ color }) => {
  return (
    <div className="page-common-block">
      <div className="faq-wrapper">
        {FAQ.length &&
          FAQ.map((item, i) => {
            return (
              <div
                key={item.question}
                className="faq-wrapper-item"
                data-aos-anchor-placement="top"
                data-aos={animations.zoomInUp}
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <Step step={item.question} number={i + 1} color={color} />
                <p className="faq-wrapper-item-answer">{item.answer}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Question;
