import React from "react";

export let TOGGLE_EDIT_PROFILE_MENU = (props) => {
  return props.disableEdit === undefined ? (
    <button class="uidModalButton" onClick={props.toggleShowTrue}>
      Update profile information
    </button>
  ) : null;
};
