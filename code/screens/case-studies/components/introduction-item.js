import React from "react";

function IntroductionItem({ title, description, children }) {
  return (
    <div className="project-page-intro">
      <h6>{title}</h6>
      {description ? <p>{description}</p> : children}
    </div>
  );
}

export default IntroductionItem;
