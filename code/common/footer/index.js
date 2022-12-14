import ListItems from "./components/list";
import Policy from "./components/policy";
import React from "react";

const Footer = ({
  variables,
  // marquee,
  copyright,
  privacy_policy_text,
  privacy_policy_url,
  terms_of_use_text,
  terms_of_use_url,
}) => {
  return (
    <div>
      {/* {marquee} */}
      <div className="footer">
        <div className="page-common-block">
          <div className="flex-between">
            {variables.length
              ? variables.map((variable, i) => {
                  const { title, list } = variable;
                  return (
                    <div key={i}>
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
