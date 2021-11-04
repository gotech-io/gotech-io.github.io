import React from "react";

function SeminarListItem({
  title,
  folderName,
  speakerName,
  speakerAvatar,
  courseId,
  date,
  time,
}) {
  return (
    <li className="seminars-list-item">
      <a
        href={`/oracle-week-2021/${folderName}`}
        className="seminars-list-item-flex"
      >
        <img src={speakerAvatar} className="seminars-list-item-avatar" />
        <div className="seminars-list-item-details">
          <h3 className="seminars-list-item-title">{title}</h3>
          <h5 className="seminars-list-item-speaker">{speakerName}</h5>
          <p className="seminars-list-item-date">{date}</p>
        </div>
      </a>
    </li>
  );
}

export default SeminarListItem;
