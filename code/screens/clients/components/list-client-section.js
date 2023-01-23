import ClientSection from "./client-section";
import React from "react";

function ListClientSection({ sections }) {
  return (
    <div className="page-common-block">
      {sections.map(({ title, description }, i) => {
        return (
          <ClientSection
            key={title}
            title={title}
            description={description}
            reverse={i % 2 === 0 ? "reverse" : ""}
          />
        );
      })}
    </div>
  );
}

export default ListClientSection;
