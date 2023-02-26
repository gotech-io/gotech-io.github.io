import React from "react";
import { PROJECTS_INFO } from "../../../../assets/js/common/case-studies-projects";
import CaseStudyItem from "./case-study-item";

function ListProjects() {
  const projects = Object.values(PROJECTS_INFO);

  return (
    <div>
      {projects.length &&
        projects.map(({ type }, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={type}>
              <CaseStudyItem type={type} side={isEven ? "left" : "right"} />
            </div>
          );
        })}
    </div>
  );
}

export default ListProjects;
