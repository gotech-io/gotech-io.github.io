import React from "react";

const Policy = ({
  copyright,
  privacy_policy_text,
  privacy_policy_url,
  terms_of_use_text,
  terms_of_use_url,
}) => {
  return (
    <div className="footer-bottom flex-between">
      <div className="page-common-block">
        <section className="footer-bottom-section flex-between">
          <div className="footer-bottom-section-policy">{copyright}</div>
          <div className="footer-bottom-section-policy">
            <a href={privacy_policy_url}>{privacy_policy_text}</a>
            <a href={terms_of_use_url}>{terms_of_use_text}</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Policy;
