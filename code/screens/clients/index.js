import ColorSection from "../../common/ColorSection";
import Flags from "../../common/flags";
import Left from "./components/left";
import PageWrapper from "../../common/pageWrapper";
import React from "react";
import StagesCycle from "../../common/stages-cycle";
import TitleSection from "../../common/titleSection";
import { CLIENT_CATEGORIES } from "../../../assets/js/common/clients";
import { CLIENT_TITLES } from "../../../assets/js/common/clients/const";
import { listClients } from "../../../assets/js/common/clients/listClient";
import { COLORS } from "../../../assets/js/common/colors";

function Clients({ title, description, marquee, contact, _relativeURL, _ID }) {
  const { content } = CLIENT_CATEGORIES["MEDICINE"];

  return (
    <PageWrapper
      title={title}
      description={description}
      marquee={marquee}
      contact={contact}
      _relativeURL={_relativeURL}
      _ID={_ID}
    >
      <div>
        <TitleSection
          title={"All Our Categories"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <StagesCycle stages={listClients} />
      </div>

      <ColorSection color={COLORS.DEFAULT}>
        <div className="clients-categories-wrapper">
          <Flags flags={listClients} />

          <div>
            <TitleSection
              title={content.title}
              description={content.description}
            />
            <Left />
            <Left />
          </div>
        </div>
      </ColorSection>
    </PageWrapper>
  );
}

export default Clients;
