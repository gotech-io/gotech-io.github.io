import Left from "./left";
import React from "react";
import TitleSection from "../../../common/titleSection";
import { COLORS } from "../../../../assets/js/common/colors";

function Category({ title, description, category, comment, range }) {
  return (
    <div>
      <TitleSection
        title={"fcghjk"}
        description={
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      />
      <Left
        title={"Category"}
        description={
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        color={COLORS.GREEN}
        range={4}
        clientName={"cvbgh jkjnkm"}
      />
    </div>
  );
}

export default Category;
