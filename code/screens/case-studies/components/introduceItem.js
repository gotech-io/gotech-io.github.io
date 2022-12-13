import React from "react";

function IntroduceItem({ title, description, children }) {
  return (
    <div className="project-page-intro">
      <h6>{title}</h6>
      {description ? <p>{description}</p> : <div>{children}</div>}
    </div>
  );
}

export default IntroduceItem;
