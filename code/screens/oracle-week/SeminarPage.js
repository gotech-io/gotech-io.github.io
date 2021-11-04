import React from "react";
import { handleUrl } from "../../utils";

function SeminarPage({
  header,
  speakerAvatar,
  speakerName,
  date,
  time,
  courseId,
  _body,
  title,
  _relativeURL,
  _ID,
  linkedin,
}) {
  return (
    <div className="seminar-page">
      {header}
      <h2 className="seminar-page-title">{title}</h2>
      <div className="seminar-page-flex">
        <div className="seminar-page-left">
          <h5>Main Speaker:</h5>
          <img
            className="seminar-page-left-avatar"
            src={speakerAvatar}
            alt={speakerName}
          />
          <a href={linkedin} target="_blank" className="seminar-page-left-link">
            <img
              src={handleUrl(
                "/assets/images/socials/linkedin.png",
                _relativeURL,
                _ID
              )}
            />
            <h4 className="seminar-page-left-name">{speakerName}</h4>
          </a>
          <section>
            <h3>Course ID: </h3>
            <p>{courseId}</p>
          </section>
          <section>
            <h3>Date: </h3>
            <p>{date}</p>
          </section>
          <section>
            <h3>Time: </h3>
            <p>{time}</p>
          </section>
        </div>
        <div className="seminar-page-right">{_body}</div>
      </div>
      <script
        type="module"
        src={handleUrl(`/assets/js/oracle-week/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default SeminarPage;
