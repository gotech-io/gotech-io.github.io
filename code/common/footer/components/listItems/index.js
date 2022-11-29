import React from "react";

const ListItems = ({ list }) => {
  return (
    <div className="list-items">
      {list.map((item, j) => {
        const { title, phone, socials } = item;
        return (
          <div key={j} className="text-small">
            {title}
            <div className="text-small">
              {phone || phone}
              {socials || socials}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
