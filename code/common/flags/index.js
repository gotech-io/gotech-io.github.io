import Flag from "../flag";
import React from "react";

function Flags({ flags }) {
  return (
    <div>
      {flags.length &&
        flags.map(({ title, color }) => {
          return (
            <div key={title} className="clients-flags-wrapper">
              <Flag icon={title} color={color} />
            </div>
          );
        })}
    </div>
  );
}

export default Flags;
