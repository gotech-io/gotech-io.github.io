import ColorSection from "../../../common/ColorSection";
import Flags from "../../../common/flags";
import ListReviews from "../components/listReviews";
import Question from "../../../common/faq";
import React from "react";
import { listCategories } from "../../../../assets/js/clients/listCategories";
import { SECTIONS_DETAILS } from "../../../../assets/js/clients/sectionsDetails";

function Sections({ color, content }) {
  const mainColor = color;

  return (
    <div>
      {SECTIONS_DETAILS.length &&
        SECTIONS_DETAILS.map(({ type, color, title, description }) => {
          return (
            <ColorSection
              key={type}
              color={color || mainColor}
              title={title}
              description={description}
            >
              {type === "section-alpha" && (
                <div className="clients-categories-wrapper">
                  <Flags flags={listCategories} activeType={type} />
                  <ListReviews content={content} color={mainColor} />
                </div>
              )}

              {type === "section-beta" && <Question color={mainColor} />}
            </ColorSection>
          );
        })}
    </div>
  );
}

export default Sections;
