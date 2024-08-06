import React from "react";
import ProfileData from "../../components/Profile/ProfileData/ProfileData";
import ProfileSettings from "../../components/Profile/ProfileSettings/ProfileSettingsEdit";
import TitleComp from "../../components/TitleComp/TitleComp";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";


function ProfilePage() {
  return (
    <React.Fragment>
      <Outlet />
      <TitleComp
        leftIcon={faChevronLeft}
        leftIconLabel="go back"
        textState="show"
        leftIconState = "show"
        rightIconState = "hide"
        title="Profile"
         ></TitleComp>
      <ProfileData></ProfileData>
      <ProfileSettings></ProfileSettings>
    </React.Fragment>
  );
}
export default ProfilePage;
