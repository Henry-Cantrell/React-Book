import React from "react";
import { USER_AUTH_DISPLAY_CONTROLLER } from ".//componentsforauthform/userauthdisplaycontroller";
import { MAIN_USER_PAGE } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/mainuserpage";
import { useSelector, useDispatch } from "react-redux";
import { deleteDuplicateTweeds } from "./controllermodules/deleteduplicatetweeds"; 
import { sortFollowedUserLikesInFb } from "./controllermodules/sortfolloweduserlikesinfb"; 
import { followedUserTweedsFbToRedux } from "./controllermodules/followedusertweedsfbtoredux"; 
import { userTweedsFbToRedux } from "./controllermodules/usertweedsfbtoredux"; 
import { likedByFollowedFbToRedux } from "./controllermodules/likedbyfollowedfbtoredux"; 
import { userFavsFbToRedux } from "./controllermodules/userfavfirebasetoredux"; 

export let LOGIN_STATUS_CONTROLLER = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const uniqueUid = useSelector((state) => state.uidInt);
  const usernameOfCurrentUser = useSelector((state) => state.userName);
  const dispatch = useDispatch();

  //The following functions place onSnapshot listeners to tweed collections in firebase for the purpose of -->
  //--> dynamically processing changes to the user feed, as explained by the method names.

  deleteDuplicateTweeds(uniqueUid, usernameOfCurrentUser);
  sortFollowedUserLikesInFb(uniqueUid);
  followedUserTweedsFbToRedux(uniqueUid, dispatch);
  userTweedsFbToRedux(uniqueUid, dispatch);
  likedByFollowedFbToRedux(uniqueUid, dispatch);
  userFavsFbToRedux(uniqueUid, dispatch);

  //The return method reads from a react-hook accessed redux store boolean -->
  //--> to control page flow from user auth status

  return <>{isLogged ? <MAIN_USER_PAGE /> : <USER_AUTH_DISPLAY_CONTROLLER />}</>;
};
