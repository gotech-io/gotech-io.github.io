import React from "react";

function CareerPage({ _body, form, title, tags }) {
  return (
    <div className="career-page">
      <div className="career-page-flex">
        <div className="career-page-body">
          <h2 className="career-page-title"> {title}</h2>
          {tags}
          {_body}
        </div>
        {form}
      </div>
    </div>
  );
}

export default CareerPage;
