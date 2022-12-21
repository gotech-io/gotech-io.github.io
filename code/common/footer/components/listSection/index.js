import ListItems from "../list";
import React from "react";
import Socials from "../../../socials";
import { FOOTER_INFO } from "../../../../../assets/js/common/footer";

//list.some((e) => e.title === "Social")

const ListSection = () => {
  return (
    <div className="page-common-block">
      <div className="footer-list">
        {FOOTER_INFO.length
          ? FOOTER_INFO.map((info) => {
              const { title, list } = info;

              return (
                <div key={title}>
                  <h6>{title}</h6>
                  <ListItems list={list} />
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default ListSection;
