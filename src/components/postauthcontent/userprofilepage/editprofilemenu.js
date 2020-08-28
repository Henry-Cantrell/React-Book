import React from "react";
import { MODAL_USER_PROFILE } from "./modalBackgroundUserProfile";

export let EDIT_PROFILE_MENU = (props) => {
  return props.show ? <MODAL_USER_PROFILE hide={props.hide} /> : null;
};
