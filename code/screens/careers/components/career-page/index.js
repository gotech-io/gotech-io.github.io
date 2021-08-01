import React from "react";
import Tags from "../../../../common/tags/index";
function CareerPage({ _body, form, title, tags, backBtn }) {
  return (
    <div className="career-page">
      <div className="career-page-grid">
        {backBtn}
        <h2 className="career-page-title"> {title}</h2>
        <Tags tags={tags} />
        <div className="career-page-flex">
          <div className="career-page-body">{_body}</div>
          {form}
        </div>
      </div>
    </div>
  );
}

export default CareerPage;
