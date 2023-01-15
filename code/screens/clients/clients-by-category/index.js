import List from "../../home/sections/clients/components/list";
import React from "react";

const ClientsByCategory = ({ title, clients }) => {
  return (
    <div className="clients-list">
      <h4>{title}</h4>
      <List list={clients} />
    </div>
  );
};

export default ClientsByCategory;
