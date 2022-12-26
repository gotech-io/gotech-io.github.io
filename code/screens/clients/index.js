import Categories from "../../common/categories";
import ColorSection from "../../common/ColorSection";
import PageWrapper from "../../common/pageWrapper";
import React from "react";
import { CLIENT_DETAILS } from "../../../assets/js/common/clients";
import { listCategories } from "../../../assets/js/common/clients/listCategories";

function Clients({ marquee, contact, _relativeURL, _ID }) {
  const { title, description, sections } = CLIENT_DETAILS;

  return (
    <PageWrapper
      title={title}
      description={description}
      marquee={marquee}
      contact={contact}
      _relativeURL={_relativeURL}
      _ID={_ID}
    >
      {sections.length &&
        sections.map(({ type, color, title, description }) => {
          return (
            <div key={type} className="clients">
              <ColorSection
                color={color}
                title={title}
                description={description}
              ></ColorSection>

              {type === "section-beta" && (
                <Categories categories={listCategories} />
              )}
            </div>
          );
        })}
    </PageWrapper>
  );
}

export default Clients;
