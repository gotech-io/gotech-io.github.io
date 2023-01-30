import React from "react";

const Profile = ({ profile }) => {
  const { image, title, date } = profile;

  return (
    <div className="profile">
      <div className="profile-circle">
        <img src={image} alt="p" />
      </div>
      <p className="profile-title">{title}</p>
      <p className="profile-date">{date}</p>
    </div>
  );
};

export default Profile;
