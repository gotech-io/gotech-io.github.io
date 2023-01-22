import React from "react";
import { handleUrl } from "../../utils";

function PrivacyPolicy({ _relativeURL, _ID }) {
  return (
    <div className="privacy-policy">
      <div className="privacy-policy-block"></div>
      <div className="page-common-block privacy-policy-wrapper">
        <h2>
          Accessibility Statement for
          <span className="basic-information website-name">GoTech</span>
        </h2>
        <p>
          This is an accessibility statement from
          <span className="basic-information organization-name">GoTech</span>.
        </p>
        <h3>Conformance status</h3>
        <p>
          The
          <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">
            {" Web Content Accessibility Guidelines (WCAG) "}
          </a>
          defines requirements for designers and developers to improve
          accessibility for people with disabilities. It defines three levels of
          conformance: Level A, Level AA, and Level AAA.
          <span className="basic-information website-name">GoTech</span>
          is
          <span
            className="basic-information conformance-status"
            data-printfilter="lowercase"
          >
            partially conformant
          </span>
          with
          <span className="basic-information conformance-standard">
            <span data-negate="">WCAG 2.1 level AA</span>.
          </span>
          <span>
            <span className="basic-information conformance-status">
              Partially conformant
            </span>
            means that
            <span className="basic-information conformance-meaning">
              some parts of the content do not fully conform to the
              accessibility standard
            </span>
            .
          </span>
        </p>
        <h3>Feedback</h3>
        <p>
          We welcome your feedback on the accessibility of
          <span className="basic-information website-name">GoTech</span>. Please
          let us know if you encounter accessibility barriers on
          <span className="basic-information website-name">GoTech</span>:
        </p>
        <ul className="basic-information feedback h-card">
          <li>
            Phone:
            <span className="phone-number p-tel">+972 50 6544454</span>
          </li>
          <li>
            E-mail:
            <a
              className="email u-email"
              href="mailto:accessibility@gotech.ioaccessibility@gotech.ioaccessibility@gotech.io"
            >
              accessibility@gotech.io
            </a>
          </li>
          <li>
            Visitor Address:
            <span className="visitor-address p-extended-address">
              Ha-Melakha St 5, Netanya, Israel
            </span>
          </li>
        </ul>
        <p>
          We try to respond to feedback within
          <span className="feedback responsetime">3 business days</span>.
        </p>
      </div>
      <script
        type="module"
        src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default PrivacyPolicy;
