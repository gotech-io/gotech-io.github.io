import CircleDiagramExternalItem from "./circleDiagramExternalItem";
import React from "react";

function CircleDiagramExternal({ externalsCircles }) {
  return (
    <div className="circle-diagram-external">
      <div className="circle-diagram-technologies-circle"> </div>
      <div>
        {externalsCircles.length &&
          externalsCircles.map(({ f, s }) => {
            return (
              <div
                key={f}
                className="circle-diagram-technologies-rotate-wrapper"
              >
                <CircleDiagramExternalItem color={f} />
                <CircleDiagramExternalItem color={s} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CircleDiagramExternal;
