import Header from "../../../common/header";
import React from "react";
import StagesCycle from "../../../common/stages-cycle";
import Technologies from "../../../common/technologies";
import { SERVICES } from "../../../../assets/js/common/content/services";
import { handleUrl } from "../../../utils";

function ServicePage({ entity, _relativeURL, _ID }) {
  const { title, description, services } = SERVICES[entity];
  return (
    <div>
      <Header title={title} description={description} />

      <div className="services-block">
        <div className="page-common-block">
          <p className="services-block-description">
            "Our QA Automation services provide complete solutions for
            automating your software testing processes. We offer services such
            as implementing and integrating automation infrastructure,
            developing test tools and reporting tools, and providing automation
            training to your team. Our experts have extensive experience in
            automation, and can help you create stable and maintainable test
            automation systems that will save time and improve the reliability
            of your software."
          </p>
        </div>
      </div>

      <StagesCycle />

      <div className="services-block">
        <div className="page-common-block">
          <p className="services-block-description">
            "Our QA Automation services provide complete solutions for
            automating your software testing processes. We offer services such
            as implementing and integrating automation infrastructure,
            developing test tools and reporting tools, and providing automation
            training to your team. Our experts have extensive experience in
            automation, and can help you create stable and maintainable test
            automation systems that will save time and improve the reliability
            of your software."
          </p>
        </div>
      </div>

      <div className="services-technology">
        <div className="page-common-block">
          <div>
            <h4>Title</h4>
            <p>gfcvhgjhkjlk;lkghfdgh gjhgjhgkjhkhkjg</p>
          </div>

          <div className="services-technology-wrapper">
            {services.map((service) => {
              return (
                <Technologies
                  key={performance.now()}
                  technologies={service.technologies}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="services-block">
        <div className="page-common-block">
          <p className="services-block-description">
            "Our QA Automation services provide complete solutions for
            automating your software testing processes. We offer services such
            as implementing and integrating automation infrastructure,
            developing test tools and reporting tools, and providing automation
            training to your team. Our experts have extensive experience in
            automation, and can help you create stable and maintainable test
            automation systems that will save time and improve the reliability
            of your software."
          </p>
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
