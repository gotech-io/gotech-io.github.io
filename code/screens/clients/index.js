import Header from "../../common/header";
import React from "react";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

function Clients({ title, description, _relativeURL, _ID }) {
  return (
    <div>
      <Header title={title} description={description} />
      <script
        type="module"
        src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default Clients;
