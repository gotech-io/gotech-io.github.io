import Left from "./left";
import React from "react";
import Right from "./right";
import { PROJECTS_INFO } from "../../../../assets/js/common/case-studies-projects";

function ListProjects() {
  const projects = Object.values(PROJECTS_INFO);

  return (
    <div>
      {projects.length &&
        projects.map(({ type }, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={type}>
              {isEven ? <Left type={type} /> : <Right type={type} />}
            </div>
          );
        })}
    </div>
  );
}

export default ListProjects;
