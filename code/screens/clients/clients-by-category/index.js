import CategoryItem from "../../../common/category";
import List from "../../home/sections/clients/components/list";
import React from "react";

const ClientsByCategory = ({ title, link, icon, clients }) => {
  return (
    <div className="clients-list-wrapper">
      <CategoryItem title={title} icon={icon} link={link} />
      <List list={clients} />
    </div>
  );
};

export default ClientsByCategory;
