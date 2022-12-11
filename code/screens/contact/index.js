import Header from "../../common/header";
import Info from "./components/info";
import React from "react";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

function ContactPage({ title, description, info, _relativeURL, _ID }) {
  return (
    <div>
      <Header title={title} description={description} />

      <div className="page-common-block">
        <div className="page-common-content">
          <Info info={info} />
        </div>
      </div>

      <script
        type="module"
        src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default ContactPage;
