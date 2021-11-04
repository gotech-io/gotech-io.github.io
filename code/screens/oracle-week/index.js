import React from "react";
import { handleUrl } from "../../utils";

function OracleWeek({ _relativeURL, _ID, header, seminarsList }) {
  return (
    <div className="seminars">
      {header}
      {seminarsList}
      <script
        type="module"
        src={handleUrl(`/assets/js/oracle-week/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default OracleWeek;
