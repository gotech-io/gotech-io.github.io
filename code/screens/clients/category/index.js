import Category from "../components/category";
import ColorSection from "../../../common/ColorSection";
import Flags from "../../../common/flags";
import PageWrapper from "../../../common/pageWrapper";
import React from "react";
import { listCategories } from "../../../../assets/js/common/clients/listCategories";
import { COLORS } from "../../../../assets/js/common/colors";

const isEmptyCategory =
  "Sorry, right now we don't have a details about this category";

function Clients({ type, marquee, contact, _relativeURL, _ID }) {
  const currentCategory = listCategories.find((item) => item.type === type);
  const { title, description } = currentCategory || {};

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
          <ColorSection color={COLORS.MAIN}>
            <div className="clients-categories-wrapper">
              <Flags flags={listCategories} activeType={type} />
              <Category />
            </div>
          </ColorSection>
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
