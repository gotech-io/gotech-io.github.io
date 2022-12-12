import Header from "../../../common/header";
import LifeCycle from "../../../common/life-cycle";
import React from "react";
import Technologies from "../../../common/technologies";
import { SERVICES } from "../../../../assets/js/common/content/services";
import { handleUrl } from "../../../utils";

function ServicePage({ entity, _relativeURL, _ID }) {
  const { title, description, services } = SERVICES[entity];
  return (
    <div>
      <Header title={title} description={description} />

      <LifeCycle />

      <div className="services-technology">
        <div className="page-common-block">
          <div className="services-technology-wrapper">
            {services.map((service, i) => {
              return (
                <div key={i} className="services-technology-block">
                  <div className="services-technology-block-wrapper">
                    <div className="services-technology-button">
                      <i className="fa-solid fa-arrow-down" />
                    </div>
                  </div>

                  <div className="accordion-container">
                    <div className="accordion-label">
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                    <div className="accordion-content">
                      <Technologies technologies={service.technologies} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="services-block">
        <div className="page-common-block">
          <p className="services-block-description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>

      <script
        type="module"
        src={handleUrl(`/assets/js/screens/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default ServicePage;
