import ClientsByCategory from "../clients-by-category";
import React from "react";

const ListClients = ({ listCategories }) => {
  return (
    <div className="page-common-block">
      {listCategories.length &&
        listCategories.map(({ title, link, icon, clients }, i) => {
          return (
            <div key={i}>
              {clients?.length && (
                <ClientsByCategory
                  title={title}
                  icon={icon}
                  link={link}
                  clients={clients}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default ListClients;
