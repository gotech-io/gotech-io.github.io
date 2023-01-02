import React from "react";
import Reviews from "./reviews";
import TitleSection from "../../../common/titleSection";

function ListReviews({ content, color }) {
  const { title, description, clients } = content;
  return (
    <div>
      <TitleSection title={title} description={description} />

      {clients.length &&
        clients.map(({ title, description, range, clientName }, i) => {
          return (
            <Reviews
              key={title}
              title={title}
              description={description}
              color={color}
              range={range}
              clientName={clientName}
              reverse={i % 2 === 0 ? "reverse" : ""}
            />
          );
        })}
    </div>
  );
}

export default ListReviews;
