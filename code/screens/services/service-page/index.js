import LifeCycle from "../../../common/life-cycle";
import React from "react";
import { SERVICES } from "../../../../assets/js/common/content/services";
import { handleUrl } from "../../../utils";

function ServicePage({ entity, _relativeURL, _ID }) {
  const { title, description } = SERVICES[entity];

  return (
    <div className="page-common">
      <div className="page-common-block">
        <h2 className="page-common-title">{title}</h2>
        <p className="page-common-description text-description">
          {description}
        </p>
      </div>

      <div className="page-common-block">
        <LifeCycle />
      </div>

      <script
        type="module"
        src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default ServicePage;
