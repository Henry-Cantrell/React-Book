import React from "react";
import { MODAL_CLASS_FORM } from "./modalcc";
import { MAIN_USER_PAGE } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/mainuserpage";
import { useSelector } from "react-redux";
import {joinerForUaj} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/loginandsignup/modulesforuajforlikes/joinerforuaj'

export let USER_AUTH_JOINER = () => {
  const isLogged = useSelector((state) => state.isLogged);

  joinerForUaj();

  return <>{isLogged ? <MAIN_USER_PAGE /> : <MODAL_CLASS_FORM />}</>;
};
