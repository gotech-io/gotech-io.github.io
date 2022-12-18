import Diagram from "../../common/diagram";
import Header from "../../common/header";
import ListServices from "./components/list";
import Points from "../../common/points";
import PointsSection from "./components/PointsSection";
import React from "react";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

function Services({ title, description, info, _relativeURL, _ID }) {
  const { services, intro, diagram } = info;
  const { main, second, third } = description;
  return (
    <div>
      <Header title={title} description={main} />

      <div className="services-block">
        <div className="page-common-block">
          <p className="services-block-description">{second}</p>
        </div>
      </div>

      <div className="page-common-block">
        <ListServices services={services} />
      </div>

      <div className="services-block">
        <div className="page-common-block">
          <p className="services-block-description">{third}</p>
        </div>
      </div>

      <PointsSection intro={intro} />

      <DiagramSection diagram={diagram} />

      <script
        type="module"
        src={handleUrl(`/assets/js/screens/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default Services;
