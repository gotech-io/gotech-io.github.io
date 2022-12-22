import ColorSection from "../../common/ColorSection";
import Flag from "../../common/flag";
import PageWrapper from "../../common/pageWrapper";
import React from "react";
import TitleSection from "../../common/titleSection";
import { CLIENT_CATEGORIES } from "../../../assets/js/common/clients";
import { COLORS } from "../../../assets/js/common/colors";

//import { TitleSection } from "../../common/titleSection";

//const stages = [categories.medicine];

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
      {CLIENT_CATEGORIES.length &&
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
        })}
      {/* <StagesCycle stages={stages} />

      <ColorSection color={COLORS.DEFAULT}>
        <div className="clients-categories-wrapper">
          <div className="clients-flags-wrapper">
            <Flag icon="MEDICINE" color="green" />
          </div>

          <TitleSection
            title="dfghjklgf"
            description="fgiloof hkghdgildsjfhvhgsdhjcjlfvhhjdf gjdhhfk olifghgdfjfj
              fgjfghvkf"
          />
        </div>
      </ColorSection> */}
    </PageWrapper>
  );
}

export default Clients;
