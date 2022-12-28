import React from "react";

function CircleDiagramRedItem() {
  return (
    <div className="circle-diagram-red-services-wrapper">
      <div className="circle-diagram-red-services-icons"></div>
    </div>
  );
}

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
          <div className="circle-diagram-red">
            <div className="circle-diagram-red-circle">
              {[1, 2].map((item) => {
                return (
                  <div key={item} className="circle-diagram-red-rotate-wrapper">
                    <CircleDiagramRedItem />
                    <CircleDiagramRedItem />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="circle-diagram-line-circle">
            {[1, 2, 3].map((item) => {
              return (
                <div key={item} className="circle-diagram-icon-inner">
                  <CircleDiagramInnerItem />
                  <CircleDiagramInnerItem />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CircleDiagram;
