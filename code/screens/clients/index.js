import ListCategories from "../../common/categories";
import ListClients from "./listClients";
import PageWrapper from "../../common/pageWrapper";
import React from "react";
import { CLIENTS_DETAILS } from "../../../assets/js/clients";
import { listCategories } from "../../../assets/js/clients/listCategories";
import { SECTIONS } from "../../../assets/js/common/sections";

const subjects = [
  {
    type: SECTIONS.ALPHA,
    content: <ListClients listCategories={listCategories} />,
  },
];

function Clients({ marquee, contact, _relativeURL, _ID }) {
  const { title, description, sections } = CLIENTS_DETAILS;

  return (
    <div className="clients">
      <PageWrapper
        title={title}
        description={description}
        sections={sections}
        subjects={subjects}
        marquee={marquee}
        contact={contact}
        _relativeURL={_relativeURL}
        _ID={_ID}
      />
    </div>
  );
}

export default Clients;
