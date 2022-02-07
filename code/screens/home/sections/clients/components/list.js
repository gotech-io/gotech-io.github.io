import React from "react";
import animations from "../../../../../../assets/js/animations";
import Image from "../../../../../common/img";

const List = ({ list }) => {
  return (
    <>
      {list.map((cat, i) => {
        return (
          <div key={i}>
            <h5 className="home-clients-cat-title">{cat.title}</h5>
            <ul className="home-clients-list flex-center">
              {cat.items.map((client, j) => {
                return (
                  <li
                    key={j}
                    data-aos={animations.up}
                    className="home-clients-list-item"
                  >
                    <img src={client.image} alt={client.name} />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default List;
