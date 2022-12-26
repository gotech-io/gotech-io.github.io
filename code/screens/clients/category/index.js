import ColorSection from "../../../common/ColorSection";
import Flags from "../../../common/flags";
import ListReviews from "../components/listReviews";
import PageWrapper from "../../../common/pageWrapper";
import Question from "../../../common/faq";
import React from "react";
import { listCategories } from "../../../../assets/js/clients/listCategories";
import { SECTIONS_DETAILS } from "../../../../assets/js/clients/sectionsDetails";
import { COLORS } from "../../../../assets/js/common/colors";

const isEmptyCategory =
  "Sorry, right now we don't have a details about this category";

function Clients({ type, marquee, contact, _relativeURL, _ID }) {
  const currentCategory = listCategories.find((item) => item.type === type);
  const { title, description, color, content } = currentCategory || {};

  return (
    <div>
      {currentCategory ? (
        <PageWrapper
          title={title}
          description={description}
          marquee={marquee}
          contact={contact}
          _relativeURL={_relativeURL}
          _ID={_ID}
        >
          {SECTIONS_DETAILS.length &&
            SECTIONS_DETAILS.map((section) => {
              return (
                <ColorSection
                  key={section.type}
                  color={section.color || color}
                  title={section.title}
                  description={section.description}
                >
                  {section.type === "section-alpha" && (
                    <div className="clients-categories-wrapper">
                      <Flags flags={listCategories} activeType={type} />
                      <ListReviews content={content} />
                    </div>
                  )}

                  {section.type === "section-beta" && (
                    <Question color={color} />
                  )}
                </ColorSection>
              );
            })}
        </PageWrapper>
      ) : (
        <ColorSection
          title={isEmptyCategory}
          color={COLORS.PRIME}
        ></ColorSection>
      )}
    </div>
  );
}

export default Clients;
