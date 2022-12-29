import React from "react";

const services = {
  title: "GoTech Group Provides",
  description:
    "State-of-the-art services, including highly qualified experts in all areas of infrastructure and development. Our services include Web Development, Mobile Development, DevOps, and QA Automation.",
};

function CircleDiagramServicesItem() {
  return (
    <div className="circle-diagram-services-wrapper">
      <div className="circle-diagram-services-icons"></div>
    </div>
  );
}

function CircleDiagramTechnologiesItem() {
  return (
    <div className="circle-diagram-technologies-wrapper">
      <div className="circle-diagram-technologies-icons"></div>
    </div>
  );
}

function CircleDiagram() {
  return (
    <div className="page-common-block">
      <div className="circle-diagram">
        <div className="circle-diagram-content">
          <div>
            <h4>{services.title}</h4>
            <p>{services.description}</p>
          </div>
        </div>

        <div className="circle-diagram-services">
          <div className="circle-diagram-services-circle"> </div>
          <div>
            {[1, 2].map((item) => {
              return (
                <div
                  key={item}
                  className="circle-diagram-services-rotate-wrapper"
                >
                  <CircleDiagramServicesItem />
                  <CircleDiagramServicesItem />
                </div>
              );
            })}
          </div>
        </div>

        <div className="circle-diagram-technologies">
          <div className="circle-diagram-technologies-circle"> </div>
          <div>
            {[1, 2, 3].map((item) => {
              return (
                <div
                  key={item}
                  className="circle-diagram-technologies-rotate-wrapper"
                >
                  <CircleDiagramTechnologiesItem />
                  <CircleDiagramTechnologiesItem />
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
