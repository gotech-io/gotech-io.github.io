import ListSection from "./components/listSection";
import Policy from "./components/policy";
import React from "react";

const Footer = ({
  copyright,
  privacy_policy_text,
  privacy_policy_url,
  terms_of_use_text,
  terms_of_use_url,
}) => {
  return (
    <div>
      <div className="footer">
        <ListSection />
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
