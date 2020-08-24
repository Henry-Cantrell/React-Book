import React from "react";

export let USER_INFO_BLOCK_MIDDLE_DIV = (props) => {
  return (
    <>
      <div class="userNameDisplayUidbProfilePage">
        Username: {props.username}
      </div>
      <div class="userBioDisplay">Bio: {props.userBio}</div>
      <div class="userJoinDateDisplay">Joined: {props.joinDate}</div>
    </>
  );
};
