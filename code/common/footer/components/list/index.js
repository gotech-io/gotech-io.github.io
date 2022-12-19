import React from "react";

const ListItems = ({ list }) => {
  return (
    <div className="list-items">
      {list.map((item) => {
        const { title, link, phone, socials } = item;
        return (
          <div key={title} className="text-small">
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
