import ColorSection from "../../common/ColorSection";
import Diagram from "../../common/diagram";
import DiagramSection from "./components/diagramSection";
import Header from "../../common/header";
import ListServices from "./components/list";
import PageWrapper from "../../common/pageWrapper";
import PointsSection from "./components/PointsSection";
import React from "react";
import animations from "../../../assets/js/animations";
import { COLORS } from "../../../assets/js/common/colors";
import { PAGE_DETAILS } from "../../../assets/js/common/services/page-details";
import { handleUrl } from "../../utils";

function Services({ marquee, contact, _relativeURL, _ID }) {
  const { title, description, info } = PAGE_DETAILS;
  //const { services, intro, diagram } = info;
  const { main, second, third } = description;
  return (
    // <div>
    //   <Header title={title} description={main} />

    //   <div className="services-block">
    //     <div className="page-common-block">
    //       <p className="services-block-description">{second}</p>
    //     </div>
    //   </div>

    //   <div className="page-common-block">
    //     <ListServices services={services} />
    //   </div>

    //   <div className="services-block">
    //     <div className="page-common-block">
    //       <p className="services-block-description">{third}</p>
    //     </div>
    //   </div>

    //   <PointsSection intro={intro} />

    //   <DiagramSection diagram={diagram} />

    //   <script
    //     type="module"
    //     src={handleUrl(`/assets/js/screens/about/index.js`, _relativeURL, _ID)}
    //   />
    // </div>
    <PageWrapper
      title={title}
      description={main}
      marquee={marquee}
      contact={contact}
      _relativeURL={_relativeURL}
      _ID={_ID}
    >
      <ColorSection color={COLORS.GREEN} title={second} />
    </PageWrapper>
  );
}

export default Services;
