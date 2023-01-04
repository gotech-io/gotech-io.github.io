import ColorSection from "../../../common/ColorSection";
import Flags from "../../../common/flags";
import ListReviews from "../components/listReviews";
import PageWrapper from "../../../common/pageWrapper";
import Question from "../../../common/faq";
import React from "react";
import Sections from "../../../common/listSection";
import { listCategories } from "../../../../assets/js/clients/listCategories";
import { SECTIONS_DETAILS } from "../../../../assets/js/clients/sectionsDetails";

function Categories({ type, marquee, contact, _relativeURL, _ID }) {
  const currentCategory = listCategories.find((item) => item.type === type);
  const { title, description, color, content } = currentCategory;

  return (
    <PageWrapper
      title={title}
      description={description}
      sections={SECTIONS_DETAILS}
      alpha={
        <div className="clients-categories-wrapper">
          <Flags flags={listCategories} activeType={type} />
          <ListReviews content={content} color={color} />
        </div>
      }
      beta={<Question color={color} />}
      marquee={marquee}
      contact={contact}
      _relativeURL={_relativeURL}
      _ID={_ID}
    />
  );
}

export default Categories;
