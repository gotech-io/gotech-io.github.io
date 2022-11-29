import Image from "../img";
import ListItems from "./components/listItems";
import Policy from "./components/policy";
import React from "react";
import { images } from "../../../assets/js/images";
import { handleUrl } from "../../utils";

const Footer = ({
  variables,
  socials,
  _relativeURL,
  _ID,
  copyright,
  privacy_policy_text,
  privacy_policy_url,
  terms_of_use_text,
  terms_of_use_url,
}) => {
  return (
    // <footer className="footer">
    //   <div className="footer-content">
    //     <a href="/#" className="footer-logo">
    //       <Image src={handleUrl(images.common.logo, _relativeURL, _ID)} />
    //     </a>
    //     {socials}
    //     <div className="footer-bottom">
    //       <p>{copyright}</p>
    //       <section className="flex-start footer-bottom-policy">
    //         <a href={privacy_policy_url}>{privacy_policy_text}</a>
    //         <a href={terms_of_use_url}>{terms_of_use_text}</a>
    //       </section>
    //     </div>
    //   </div>
    // </footer>

    <div className="footer">
      <div className="block">
        <div className="flex-between">
          {variables.map((variable, i) => {
            const { title, list } = variable;
            return (
              <div key={i}>
                <h6>{title}</h6>
                <ListItems list={list} />
              </div>
            );
          })}
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
  );
};

export default Footer;
