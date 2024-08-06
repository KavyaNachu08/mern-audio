import React from "react";
import "./ProfileData.scss";

function ProfileData() {
  return (
    <div className="user-profile">
      <div className="user-profile__image">
        <img
          src="./assets/images/userImage.png"
          alt="profile picture"
          className="user-profile-picture"
        />
      </div>
      <div className="user-profile__data">
        <p className="user-profile__data__name">name <span>lastname</span></p>
        <p className="user-profile__data__email">email.gmail.com</p>
      </div>
    </div>
  );
}
export default ProfileData;
