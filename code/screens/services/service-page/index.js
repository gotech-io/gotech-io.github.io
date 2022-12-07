import React from "react";
import Steps from "../../../common/steps";
import Tags from "../../../common/tag";
import { SERVICES } from "../../../../assets/js/common/content/services";
import { handleUrl } from "../../../utils";

function ServicePage({ entity_key, _relativeURL, _ID }) {
  //const { title, description } = SERVICES[entity_key];
  console.log({ entity_key });
  return (
    <div className="page-common">
      ServicePage
      {/* <div className="page-common-block">
        <h2 className="page-common-title">{title}</h2>
        <p className="page-common-description text-description">
          {description}
        </p>
      </div> */}
      <script
        type="module"
        src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default ServicePage;
