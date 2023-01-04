import React from "react";
import { ICONS } from "../../../assets/js/common/icons";

const stars = new Array(5).fill(0);

function Range({ color, range }) {
  return (
    <div className="range-wrapper">
      {stars.length &&
        stars.map((item, i) => {
          const colorClass = i + 1 <= range ? `range-block-${color}` : "";

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
