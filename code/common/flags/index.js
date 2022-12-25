import Flag from "../flag";
import React from "react";

function Flags({ flags }) {
  return (
    <div className="clients-flags-wrapper">
      {flags.length &&
        flags.map(({ title, color, icon }) => {
          return (
            <div key={title}>
              <a href="/clients/education">
                <Flag icon={icon} color={color} />
              </a>
            </div>
          );
        })}
    </div>
  );
}

export default Flags;
