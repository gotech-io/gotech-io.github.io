import ColorSection from "../../common/ColorSection";
import Flag from "../../common/flag";
import Flags from "../../common/flags";
import PageWrapper from "../../common/pageWrapper";
import React from "react";
import StagesCycle from "../../common/stages-cycle";
import TitleSection from "../../common/titleSection";
import { CLIENT_CATEGORIES } from "../../../assets/js/common/clients";
import { ListClients } from "../../../assets/js/common/clients/listClient";
import { COLORS } from "../../../assets/js/common/colors";

// const stages = [categories.medicine];

function Clients({ title, description, marquee, contact, _relativeURL, _ID }) {
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
        <StagesCycle stages={ListClients} />
      </div>

      <ColorSection color={COLORS.DEFAULT}>
        <div className="clients-categories-wrapper">
          <div className="clients-flags-wrapper">
            <Flags flags={ListClients} />
          </div>

          <div>CONTENT</div>
        </div>
      </ColorSection>

      {/* {CLIENT_CATEGORIES.length &&
        CLIENT_CATEGORIES.map(({ title, description, type, color }) => {
          return (
            <div key={type}>
              <ColorSection color={COLORS.DEFAULT}>
                <div className="clients-categories-wrapper">
                  <div className="clients-flags-wrapper">
                    <Flag icon={type} color={color} />
                  </div>

                  <TitleSection title={title} description={description} />
                </div>
              </ColorSection>
            </div>
          );
        })} */}
    </PageWrapper>
  );
}

export default Clients;
