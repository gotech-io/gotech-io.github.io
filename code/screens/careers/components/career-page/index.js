import React from "react";
import { handleUrl } from "../../../../utils";
function CareerPage({
  _body,
  form,
  title,
  backBtn,
  location,
  _relativeURL,
  _ID,
}) {
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
      <script
        type="module"
        src={handleUrl(`/assets/js/careers/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default CareerPage;
