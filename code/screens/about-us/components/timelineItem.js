import React from "react";

function TimelineItem({ title, description, number, year, color, reverse }) {
  return (
    <div
      className="timeline-item"
      style={{ flexDirection: reverse && "row-reverse" }}
    >
      <div className="timeline-item-details">
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
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
