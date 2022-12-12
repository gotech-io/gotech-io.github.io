import React from "react";

const ListItems = ({ list }) => {
  return (
    <div className="list-items">
      {list.map((item, j) => {
        const { title, link, phone, socials } = item;
        return (
          <div key={j} className="text-small">
            {link ? (
              <a href={link} className="list-items-link">
                {title}
              </a>
            ) : (
              <span className="text-small">{title}</span>
            )}

            <div className="text-small">{phone || phone}</div>
            <div className="text-small">{socials || socials}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
