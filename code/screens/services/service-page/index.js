import LifeCycle from "../../../common/life-cycle";
import React from "react";
import Technologies from "../../../common/technologies";
import { SERVICES } from "../../../../assets/js/common/content/services";
import { handleUrl } from "../../../utils";

function ServicePage({ entity, _relativeURL, _ID }) {
  const { title, description, services } = SERVICES[entity];
  return (
    <div>
      <div className="page-common-header">
        <div className="page-common-block">
          <h2 className="page-common-title">{title}</h2>
          <p className="page-common-description text-description">
            {description}
          </p>
        </div>
      </div>

      <LifeCycle />

      <div className="services-technology">
        <div className="page-common-block">
          <div className="services-technology-wrapper">
            {services.map((service, i) => {
              return (
                <div key={i} className="services-technology-block">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <Technologies technologies={service.technologies} />{" "}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <script
        type="module"
        src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default ServicePage;
