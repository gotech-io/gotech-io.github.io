import ClientsByCategory from "../clients-by-category";
import React from "react";

const ListClients = ({ listCategories }) => {
  return (
    <div className="page-common-block">
      {listCategories.length &&
        listCategories.map(({ sectionName, link, icon, clients }, i) => {
          return (
            <div key={i}>
              {clients?.length && (
                <ClientsByCategory
                  sectionName={sectionName}
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
