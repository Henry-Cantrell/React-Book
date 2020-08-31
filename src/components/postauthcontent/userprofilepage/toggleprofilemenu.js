import React from "react";

export let TOGGLE_EDIT_PROFILE_MENU = (props) => {
  return props.disableEdit === undefined ? (
    <div class="profile-edit-div" onClick={props.toggleShowTrue}>
      Change your profile
    </div>
  ) : null;
};
