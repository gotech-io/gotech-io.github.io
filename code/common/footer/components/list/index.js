import React from "react";

//TOTO: Need to Add a link on item

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
              <span>{title}</span>
            )}

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
