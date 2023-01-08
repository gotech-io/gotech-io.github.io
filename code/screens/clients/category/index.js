import Flags from "../../../common/flags";
import ListReviews from "../components/listReviews";
import PageWrapper from "../../../common/pageWrapper";
import Question from "../../../common/faq";
import React from "react";
import { listCategories } from "../../../../assets/js/clients/listCategories";
import { SECTIONS_DETAILS } from "../../../../assets/js/clients/sectionsDetails";
import { SECTIONS } from "../../../../assets/js/common/sections";

function Categories({ type, marquee, contact, _relativeURL, _ID }) {
  const currentCategory = listCategories.find((item) => item.type === type);
  const { title, description, color, content } = currentCategory;

  const subjects = [
    {
      type: SECTIONS.ALPHA,
      content: <Flags flags={listCategories} activeType={type} />,
    },
    {
      type: SECTIONS.BETA,
      content: <ListReviews content={content} color={color} />,
    },
    {
      type: SECTIONS.GAMMA,
      content: <Question color={color} />,
    },
  ];

  return (
    <div className="clients-categories-wrapper">
      <PageWrapper
        title={title}
        description={description}
        sections={SECTIONS_DETAILS}
        subjects={subjects}
        color={color}
        marquee={marquee}
        contact={contact}
        _relativeURL={_relativeURL}
        _ID={_ID}
      />
    </div>
  );
}

export default Categories;
