import Diagram from "../../common/diagram";
import ListServices from "./components/list";
import PageWrapper from "../../common/pageWrapper";
import Points from "../../common/points";
import React from "react";
import { PAGE_DETAILS } from "../../../assets/js/common/services";

function Services({ services, marquee, contact, _relativeURL, _ID }) {
  const { title, description, sections, points } = PAGE_DETAILS;
  return (
    <PageWrapper
      title={title}
      description={description}
      sections={sections}
      beta={<ListServices services={services} />}
      delta={<Points points={points} />}
      epsilon={<Diagram />}
      marquee={marquee}
      contact={contact}
      _relativeURL={_relativeURL}
      _ID={_ID}
    />
  );
}

export default Services;
