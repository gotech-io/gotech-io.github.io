import React from "react";
import animations from "../../../../../../assets/js/animations";

const List = ({ list }) => {
  return (
    <ul className="home-clients-list flex-start">
      {list.map((e, i) => {
        return (
          <li
            key={i}
            data-aos={animations.up}
            className="home-clients-list-item"
          >
            <img src={e} alt="client images" />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
