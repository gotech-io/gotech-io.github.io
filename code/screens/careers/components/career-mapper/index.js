import CareerPage from "../career-page";
import ListItem from "../careers-list/list-item";
import React from "react";

function Mapper(props) {
  const { _ID } = props;
  const isCareerPage = _ID.split("careers/")[1];

  if (isCareerPage) {
    return <CareerPage {...props} />;
  }
  return <ListItem {...props} />;
}

export default Mapper;
