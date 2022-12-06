import Diagram from "../../common/diagram";
import Points from "../../common/points";
import React from "react";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

function Services({ title, description, info, _relativeURL, _ID }) {
  const { intro, diagram } = info;
  return (
    <div>
      <div className="services"></div>
      <div className="services-page page-common">
        <div className="page-common-block">
          <h2 className="page-common-title">{title}</h2>
          <p className="page-common-description text-description">
            {description}
          </p>
        </div>

        <div className="page-common-block">
          <div className="services-content">
            <div className="services-content-item">web app</div>
            <div className="services-content-item">mobile app</div>
            <div className="services-content-item">devops</div>
            <div className="services-content-item">test app</div>
          </div>
        </div>

        <div className="services-intro">
          <div className="page-common-block">
            <h5>{intro.title}</h5>
            <p>{intro.description}</p>
          </div>

          <Points points={intro.points} />
        </div>

        <div className="page-common-block">
          <div className="services-diagram">
            <h5>{diagram.title}</h5>
            <p>{diagram.description}</p>
            <div className="services-diagram-wrapper">
              <Diagram />
            </div>
          </div>
        </div>

        <script
          type="module"
          src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
        />
      </div>
    </div>
  );
}

export default Services;
