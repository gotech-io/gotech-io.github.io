import React from "react";

function List({ list, title }) {
  return (
    <div className="careers-list">
      <h4 className="careers-list-title"> {title}</h4>
      <ul>{list}</ul>
    </div>
  );
}

export default List;
