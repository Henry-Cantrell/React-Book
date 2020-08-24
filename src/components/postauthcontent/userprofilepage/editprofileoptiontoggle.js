import React from "react";

export let EDIT_PROFILE_TOGGLE = (props) => {
  return props.disableEdit === undefined ? (
    <button class="uidModalButton" onClick={this.toggleShowTrue}>
      Update profile information
    </button>
  ) : null;
};
