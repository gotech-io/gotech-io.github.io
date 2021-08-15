import React from "react";
import Tags from "../../../../common/tags/index";
function CareerPage({ _body, form, title, tags, backBtn, location }) {
  return (
    <div className="career-page">
      <div className="career-page-grid">
        {backBtn}
        <h2 className="career-page-title"> {title}</h2>
        <h4 className="career-page-location">{location}</h4>

        <div className="career-page-flex">
          <div className="career-page-body">{_body}</div>
          {form}
        </div>
      </div>
    </div>
  );
}

export default CareerPage;
