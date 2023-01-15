import ClientsByCategory from "../clients-by-category";
import React from "react";

const ListClients = ({ listCategories }) => {
  return (
    <div className="page-common-block">
      {listCategories.length &&
        listCategories.map(({ title, clients }, i) => {
          return (
            <div key={i}>
              {clients?.length && (
                <ClientsByCategory title={title} clients={clients} />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default ListClients;
