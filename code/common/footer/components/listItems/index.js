import React from "react";

const ListItems = ({ list }) => {
  return (
    <div className="list-items">
      {list.map((item, j) => {
        const { title, socials } = item;
        return (
          <div key={j} className="text-small">
            {title}
            {socials || <div>{socials}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
