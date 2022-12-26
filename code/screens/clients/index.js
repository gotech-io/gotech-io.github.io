import Categories from "../../common/categories";
import Category from "./components/category";
import ColorSection from "../../common/ColorSection";
import Flags from "../../common/flags";
import Left from "./components/left";
import PageWrapper from "../../common/pageWrapper";
import React from "react";
import StagesCycle from "../../common/stages-cycle";
import TitleSection from "../../common/titleSection";
import { CLIENT_DETAILS } from "../../../assets/js/common/clients";
import { CLIENT_TITLES } from "../../../assets/js/common/clients/const";
import { listCategories } from "../../../assets/js/common/clients/listCategories";
import { COLORS } from "../../../assets/js/common/colors";

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
