import React from "react";
import Steps from "../../../common/steps";
import Tags from "../../../common/tag";
import { PROJECTS_INFO } from "../../../../assets/js/case-studies/projects-info";
import { handleUrl } from "../../../utils";

function ProjectPage({ type, _relativeURL, _ID }) {
  const { title, description, images, tags, industry, country, challenge } =
    PROJECTS_INFO[type];
  const { main, parallax } = images;

  return (
    <div className="page-common">
      <div className="page-common-block">
        <h2 className="page-common-title">{title}</h2>
        <p className="page-common-description text-description">
          {description}
        </p>
        <div className="page-common-content">
          <div className="main-wrapper">
            <div className="main-wrapper-image">
              <img src={main.src} alt={main.alt} />
            </div>
          </div>

          <div className="project-page-block flex-between">
            <div className="project-page-intro">
              <h6>Country</h6>
              <p>{country}</p>
            </div>

            <div className="project-page-intro">
              <h6>Industry</h6>
              <p>{industry}</p>
            </div>
            <div className="project-page-intro">
              <h6>Technologies Stack </h6>
              <Tags tags={tags} count={tags.length || 0} />
            </div>
          </div>
        </div>
      </div>

      <div className="project-page">
        <div className="page-common-block">
          <h4>Challenge Faced:</h4>
          <div>
            <p>{challenge.description}</p>
            <Steps steps={challenge.steps} />
          </div>
        </div>
      </div>

      <div>
        <div className="page-common-block">
          <h4>Our Solution:</h4>
          <p>{description}</p>
        </div>
        <div className="image-block-parallax jarallax" data-jarallax>
          <img className="jarallax-img" src={parallax.src} alt={parallax.alt} />
        </div>
      </div>

      <script
        type="module"
        src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default ProjectPage;
