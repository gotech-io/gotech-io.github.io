import PageWrapper from "../../../common/pageWrapper";
import React from "react";
import Sections from "./sections";
import { listCategories } from "../../../../assets/js/clients/listCategories";

function Categories({ type, marquee, contact, _relativeURL, _ID }) {
  const currentCategory = listCategories.find((item) => item.type === type);
  const { title, description, color, content } = currentCategory;

  return (
    <PageWrapper
      title={title}
      description={description}
      marquee={marquee}
      contact={contact}
      _relativeURL={_relativeURL}
      _ID={_ID}
    >
      <Sections color={color} content={content} />
    </PageWrapper>
  );
}

export default Categories;
