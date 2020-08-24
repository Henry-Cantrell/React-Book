import React from "react";
import { USER_AVATAR } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/useravatar";

export let OTHER_USER_INFO_DISPLAY = () => {
  <>
    <div className="holderForAvatarOnExplore">
      <USER_AVATAR uid={props.uid} />
    </div>
    <div class="userNameDisplayUidbProfilePageAuioop">
      Username: {props.username}
    </div>
    {props.userBio === "Set up your bio" ? null : (
      <div class="userBioDisplay">{props.userBio}</div>
    )}
    <div class="userJoinDateDisplay">Joined: {props.joinDate}</div>
  </>;
};
