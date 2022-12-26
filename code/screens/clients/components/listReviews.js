import React from "react";
import Reviews from "./reviews";
import TitleSection from "../../../common/titleSection";
import { COLORS } from "../../../../assets/js/common/colors";

function ListReviews({ content }) {
  const { title, description, clients } = content;
  return (
    <div>
      <TitleSection title={title} description={description} />

      {clients.length &&
        clients.map(({ title, description, range, clientName }) => {
          return (
            <Reviews
              key={title}
              title={title}
              description={description}
              color={COLORS.GREEN}
              range={range}
              clientName={clientName}
            />
          );
        })}
    </div>
  );
}

export default ListReviews;
