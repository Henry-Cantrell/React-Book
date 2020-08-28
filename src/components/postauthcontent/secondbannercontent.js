import React from "react";
import { PROFILE_PAGE } from "./userprofilepage/profilepage";
import { HOME_PAGE } from "./homepagecontent/homepage";
import { EXPLORE_PAGE_HANDLER } from "./explorepagecontent/explorepagehandler";
import OTHER_USER_PROFILE_HANDLER from "./otheruserprofileview/otheruserprofilehandler";
import { useDispatch, useSelector } from "react-redux";

export let SECOND_BANNER_CONTENT = (props) => {
  const dispatch = useDispatch();

  const otherUserUid = useSelector((state) => state.otherUserUid);

  const objectForPageStates = {
    otherUserProfileToggle: useSelector((state) => state.otherUserProfileToggle),
    homePageToggle: useSelector((state) => state.homePageToggle),
    profilePageToggle: useSelector((state) => state.profilePageToggle),
    explorePageToggle: useSelector((state) => state.explorePageToggle),
  };

  const userDataObject = {
    username: useSelector((state) => state.username),
    userBio: useSelector((state) => state.userBio),
    userUid: useSelector((state) => state.userUid),
    joinDate: useSelector((state) => state.joinDate),
  };

  return (
    <div class="second">
      {objectForPageStates.profilePageToggle ? (
        <PROFILE_PAGE userUid={userDataObject.userUid} dispatch={dispatch} />
      ) : null}
      {objectForPageStates.homePageToggle ? (
        <HOME_PAGE
          dispatch={dispatch}
          userDataObject={userDataObject}
          showOtherUserProfile={props.showOtherUserProfileFunc}
        />
      ) : null}
      {objectForPageStates.explorePageToggle ? (
        <EXPLORE_PAGE_HANDLER
          showOtherUserProfile={props.showOtherUserProfileFunc}
        />
      ) : null}
      {objectForPageStates.otherUserProfileToggle && otherUserUid ? (
        <OTHER_USER_PROFILE_HANDLER
          otherUserUid={otherUserUid}
          username={userDataObject.username}
          userUid={userDataObject.userUid}
          dispatch={dispatch}
        />
      ) : null}
    </div>
  );
};
