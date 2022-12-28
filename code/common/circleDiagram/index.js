import React from "react";

function CircleDiagramInnerItem() {
  return (
    <div className="circle-diagram-services-wrapper">
      <div className="circle-diagram-services-icons"></div>
    </div>
  );
}

function CircleDiagram() {
  return (
    <div className="page-common-block">
      <div className="circle-diagram">
        <div className="circle-diagram-line-inner">
          <div className="circle-diagram-line-circle">
            <div className="circle-diagram-icon-inner">
              <CircleDiagramInnerItem />
              <CircleDiagramInnerItem />
            </div>

            <div className="circle-diagram-icon-inner">
              <CircleDiagramInnerItem />
              <CircleDiagramInnerItem />
            </div>

            <div className="circle-diagram-icon-inner">
              <CircleDiagramInnerItem />
              <CircleDiagramInnerItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CircleDiagram;
