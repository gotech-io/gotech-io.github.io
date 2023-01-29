import BlobButton from "../../../common/btns/blob";
import React from "react";
import Description from "./description";

const BlogsDescription = ({ description, link, isPost }) => {
  return (
    <div className="page-common-block blogs-content">
      {isPost ? (
        <Description description={description} />
      ) : (
        <div>
          <p>{description}</p>
          <div className="blogs-content-link">
            <BlobButton link={link} btnText={"Read more"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsDescription;
