import React from "react";

const Navigation = ({ links, contactLink }) => {
  return links ? (
    <ul className="navbar-navigation flex-start">
      <aside className="navbar-navigation-indicator"></aside>
      {links.map(({ name, value }) => {
        return (
          <li className="navbar-navigation-link" key={name}>
            <a href={value}>{name}</a>
          </li>
        );
      })}
      <li className="navbar-navigation-link navbar-mobile-contact">
        {contactLink}
      </li>
    </ul>
  ) : null;
};

export default Navigation;
