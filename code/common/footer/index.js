import ListItems from "./components/list";
import Policy from "./components/policy";
import React from "react";

const Footer = ({
  variables,
  copyright,
  privacy_policy_text,
  privacy_policy_url,
  terms_of_use_text,
  terms_of_use_url,
}) => {
  return (
    <div>
      <div className="footer">
        <div className="page-common-block">
          <div className="footer-list">
            {variables.length
              ? variables.map((variable) => {
                  const { title, list } = variable;
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

        <Policy
          copyright={copyright}
          privacy_policy_text={privacy_policy_text}
          privacy_policy_url={privacy_policy_url}
          terms_of_use_text={terms_of_use_text}
          terms_of_use_url={terms_of_use_url}
        />
      </div>
    </div>
  );
};

export default Footer;
