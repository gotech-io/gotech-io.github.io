import GreyBox from "../../../../common/greyBox";
import React from "react";
import { ICONS } from "../../../../../assets/js/common/icons";
import { SERVICES } from "../../../../../assets/js/common/services/content";

const ItemServices = ({ entity }) => {
  const { title, details, link, image } = SERVICES[entity];

  return (
    <GreyBox title={title} description={details} image={image} link={link} />
  );
};

export default ItemServices;
