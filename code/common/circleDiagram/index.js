import React from "react";

function CircleDiagramServicesItem({ icon }) {
  return (
    <div className="circle-diagram-services-wrapper">
      <div className="circle-diagram-services-icons">
        <i className={icon}></i>
      </div>
    </div>
  );
}

function CircleDiagramTechnologiesItem({ color }) {
  return (
    <div className="circle-diagram-technologies-wrapper">
      <div
        className="circle-diagram-technologies-icons"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}

function CircleDiagram({ content }) {
  return (
    <div className="page-common-block">
      <div className="circle-diagram">
        <div className="circle-diagram-content">
          <div>
            <h4>{content.title}</h4>
            <p>{content.description}</p>
          </div>
        </div>

        <div className="circle-diagram-services">
          <div className="circle-diagram-services-circle"> </div>
          <div>
            {content.services.length &&
              content.services.map(({ f, s }) => {
                return (
                  <div
                    key={f}
                    className="circle-diagram-services-rotate-wrapper"
                  >
                    <CircleDiagramServicesItem icon={f} />
                    <CircleDiagramServicesItem icon={s} />
                  </div>
                );
              })}
          </div>
        </div>

        <div className="circle-diagram-technologies">
          <div className="circle-diagram-technologies-circle"> </div>
          <div>
            {content.technologies.length &&
              content.technologies.map(({ f, s }) => {
                return (
                  <div
                    key={f}
                    className="circle-diagram-technologies-rotate-wrapper"
                  >
                    <CircleDiagramTechnologiesItem color={f} />
                    <CircleDiagramTechnologiesItem color={s} />
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
