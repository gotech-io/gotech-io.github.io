import Diagram from "../../common/diagram";
import Points from "../../common/points";
import React from "react";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

//import Header from "../../common/header";
//import ListServices from "./components/list";

function Services({ title, description, info, _relativeURL, _ID }) {
  const { services, intro, diagram } = info;
  const { main, second, third } = description;
  return (
    <div>
      {/* <Header title={title} description={main} /> */}
      Header
      <div className="services-block">
        <div className="page-common-block">
          <p className="services-block-description">{second}</p>
        </div>
      </div>
      <div className="page-common-block">
        ListServices
        {/* <ListServices services={services} /> */}
      </div>
      <div className="services-block">
        <div className="page-common-block">
          <p className="services-block-description">{third}</p>
        </div>
      </div>
      <div className="services-intro">
        <div className="page-common-block">
          <h4>{intro.title}</h4>
          <p>{intro.description}</p>
        </div>

        <Points points={intro.points} />
      </div>
      <div className="services-diagram">
        <div className="page-common-block">
          <h4>{diagram.title}</h4>
          <p>{diagram.description}</p>
          <div className="services-diagram-wrapper">
            <Diagram />
          </div>
        </div>
      </div>
      <script
        type="module"
        src={handleUrl(`/assets/js/screens/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default Services;
