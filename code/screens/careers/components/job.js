import React from "react";
import animations from "../../../../assets/js/animations";

function Job({ _body, title }) {
  return (
    <div className="careers-job" data-aos={animations.up}>
      <section className="careers-job-title">
        <h2>{title}</h2>
      </section>
      <div className="careers-job-body">
        <h3>{title}</h3>
        {_body}
      </div>
    </div>
  );
}

export default Job;
