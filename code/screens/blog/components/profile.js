import React from "react";

const Profile = ({ src, title, date }) => {
  return (
    <div className="profile">
      <div className="profile-circle">
        <img src={src} />
      </div>
      <p className="profile-title">{title}</p>
      <p className="profile-date">{date}</p>
    </div>
  );
};

export default Profile;
