import Flag from "../flag";
import React from "react";

function Flags({ flags }) {
  return (
    <div className="clients-flags-wrapper">
      {flags.length &&
        flags.map(({ title, color, icon }) => {
          return <Flag key={title} icon={icon} color={color} />;
        })}
    </div>
  );
}

export default Flags;
