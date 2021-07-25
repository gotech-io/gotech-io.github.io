import React from "react";

const Navigation = ({ links }) => {
  return (
    <ul className="navbar-navigation flex-start">
      <aside className="navbar-navigation-indicator"></aside>
      {links.map(({ name, value }) => {
        return (
          <li className="navbar-navigation-link">
            <a href={value}>{name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
