import ColorSection from "../../common/ColorSection";
import ListCategories from "../../common/categories";
import PageWrapper from "../../common/pageWrapper";
import React from "react";
import { CLIENTS_DETAILS } from "../../../assets/js/clients";
import { listCategories } from "../../../assets/js/clients/listCategories";

function Clients({ marquee, contact, _relativeURL, _ID }) {
  const { title, description, sections } = CLIENTS_DETAILS;

  return (
    <div className="clients">
      <PageWrapper
        title={title}
        description={description}
        sections={sections}
        beta={<ListCategories categories={listCategories} />}
        marquee={marquee}
        contact={contact}
        _relativeURL={_relativeURL}
        _ID={_ID}
      />
    </div>
  );
}

export default Clients;
