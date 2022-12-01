import PositionItem from "../position-item";
import React from "react";

const Positions = ({ positions }) => {
  const { title, teams } = positions;
  return (
    <div className="positions">
      <h4>{title}</h4>
      <div className="positions-content page-common-block">
        {teams.map((team, j) => {
          const { title, options } = team;
          return (
            <div key={j} className="positions-content-team">
              <h5>{title}</h5>

              {options.map((option, i) => {
                return <PositionItem key={i} option={option} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Positions;
