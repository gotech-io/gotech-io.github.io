import React from "react";

import SeminarListItem from "./SeminarListItem";
import SeminarPage from "./SeminarPage";

function SeminarsMapper(props) {
  const { _ID } = props;
  const isSeminarPage = _ID.split("oracle-week-2021/")[1];

  if (isSeminarPage) {
    return <SeminarPage {...props} />;
  }
  return <SeminarListItem {...props} />;
}

export default SeminarsMapper;
