import React from "react";

export let EDIT_PROFILE_MENU = (props) => {
  {
    props.show ? <MODAL_USER_PROFILE hide={props.toggleShowFalse} /> : null;
  }
};
