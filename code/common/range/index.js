import React from "react";
import { ICONS } from "../../../assets/js/common/icons";

const stars = [1, 2, 3, 4, 5];

function Range({ color, range }) {
  return (
    <div className="range-wrapper">
      {stars.length &&
        stars.map((item) => {
          const colorClass = item <= range ? `range-block-${color}` : "";

          return (
            <div key={item} className="range-block">
              <i className={`${ICONS.STAR} ${colorClass}`} />
            </div>
          );
        })}
    </div>
  );
}

export default Range;
