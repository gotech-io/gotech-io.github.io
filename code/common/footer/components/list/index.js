import React from "react";
import Socials from "../../../socials";

const ListItems = ({ list }) => {
  return (
    <div className="list-items">
      {list.map((item) => {
        const { title, link, content } = item;
        return (
          <div key={title} className="text-small">
            {link ? (
              <a href={link} className="list-items-link">
                {title}
              </a>
            ) : (
              <div>
                {title === "Social" && <Socials />}
                {title === "Write Us" && (
                  <div className="text-small">{content}</div>
                )}
                {title === "Find Us" && (
                  <div className="text-small">{content}</div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
