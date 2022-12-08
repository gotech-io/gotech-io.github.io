import LifeCycle from "../../../common/life-cycle";
import React from "react";
import { SERVICES } from "../../../../assets/js/common/content/services";
import { handleUrl } from "../../../utils";

function ServicePage({ entity, _relativeURL, _ID }) {
  const { title, description } = SERVICES[entity];

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
            <div className="services-technology-block">
              <h4>Frontend</h4>
              <p>
                cvlffhgvdhjsld fhvjdfhjv hjcvl vbhjhgvhklfk jfhgdfssd;ckv dgvkl
                jbhgxvhcvx lbjhjhg fkblgbfvjs vjhchhjlfkj
              </p>
              <div className="technology">
                <div className="technology-item">1</div>
                <div className="technology-item">1</div>
                <div className="technology-item">1</div>
              </div>
            </div>

            <div className="services-technology-block">
              <h4>Backend</h4>
              <p>
                cvlffhgvdhjsld fhvjdfhjv hjcvl vbhjhgvhklfk jfhgdfs kv dgvkl
                jbhgxvhcvx lbjhjhg fkblgbfvjs vjhchhjlfkj ghjkjhg fghjklkjhgfgh
                fghjk fghjklkjhgf
              </p>
              <div className="technology">
                <div className="technology-item">1</div>
                <div className="technology-item">1</div>
                <div className="technology-item">1</div>
              </div>
            </div>
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
