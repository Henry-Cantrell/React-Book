import React from "react";
import { MODAL_USER_PROFILE_INPUTS } from "./modaluserprofileinputs";

export let EDIT_PROFILE_MENU = (props) => {
  return props.show ? <MODAL_USER_PROFILE_INPUTS /> : null;
};
