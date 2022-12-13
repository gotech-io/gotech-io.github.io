import GreenSection from "../../../common/greenSection";
import Header from "../../../common/header";
import React from "react";
import Steps from "../../../common/steps";
import Tags from "../../../common/tag";
import { PROJECTS_INFO } from "../../../../assets/js/common/content/case-studies-projects";
import { handleUrl } from "../../../utils";

function ProjectPage({ type, contact, _relativeURL, _ID }) {
  const {
    title,
    description,
    images,
    services,
    tags,
    industry,
    country,
    client,
    challenge,
    solution,
  } = PROJECTS_INFO[type];
  const { main, parallax } = images;

  return (
    <div>
      <Header title={title} description={description} />

      <GreenSection title={client.title} description={client.description} />

      <div className="page-common-block">
        <div className="page-common-content">
          <div className="main-wrapper">
            <div className="main-wrapper-image">
              <img src={main.src} alt={main.alt} />
            </div>
          </div>

          <div className="project-page-block">
            <div className="project-page-intro">
              <h6>Country</h6>
              <p>{country}</p>
            </div>

            <div className="project-page-intro">
              <h6>Industry</h6>
              <p>{industry}</p>
            </div>

            <div className="project-page-intro">
              <h6>Services Used:</h6>
              <Tags tags={services} count={services.length || 0} />

              <div className="project-page-intro-link">
                <a href="/#services">
                  see all
                  <div className="project-page-intro-link-button">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </a>
              </div>
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
        <GreenSection
          title={solution.title}
          description={solution.description}
        />

        <div className="image-block-parallax jarallax" data-jarallax>
          <img className="jarallax-img" src={parallax.src} alt={parallax.alt} />
        </div>
      </div>

      <div className="grey-section">{contact}</div>

      <script
        type="module"
        src={handleUrl(`/assets/js/screens/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default ProjectPage;
