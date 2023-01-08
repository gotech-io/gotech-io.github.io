import React from "react";
import Reviews from "./reviews";
import TitleSection from "../../../common/titleSection";

const isListEmpty = "Unfortunately, We don't have a project from this category";

function ListReviews({ content, color }) {
  const { title, description, clients } = content;
  return (
    <div>
      {clients.length ? (
        <div>
          <TitleSection title={title} description={description} />
          {clients.map(({ title, description, range, clientName }, i) => {
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
      ) : (
        <TitleSection title={isListEmpty} />
      )}
    </div>
  );
}

export default ListReviews;
