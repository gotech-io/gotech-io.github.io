import React from "react";
import TitleSection from "../../../common/titleSection";

function TimelineItem({ title, description, number, year, color, reverse }) {
  return (
    <div
      className="timeline-item"
      style={{ flexDirection: reverse && "row-reverse" }}
    >
      <div className="timeline-item-details">
        <TitleSection title={title} description={description} />
      </div>

      <div className="timeline-item-number">
        <span className={`steps-item-number ${color}`}>{number}</span>
      </div>

      <div className={`timeline-item-year-${reverse}`}>
        <h4>{year}</h4>
      </div>
    </div>
  );
}

export default TimelineItem;
