import React from "react";
import { PROFILE_PAGE } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/userprofilepage/profilepage";
import {HOME_PAGE} from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/homepagecontent/homepage";
import { EXPLORE_PAGE_HANDLER } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/explorepagecontent/explorepagehandler";
import OTHER_USER_PROFILE_HANDLER from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/otheruserprofileview/otheruserprofilehandler";
import { useDispatch } from "react-redux";

export let SECOND_BANNER_CONTENT = (props) => {
  const dispatch = useDispatch();

  let userDataObject = {
    username: useSelector((state) => state.userName),
    userBio: useSelector((state) => state.userBio),
    userUid: useSelector((state) => state.userUid),
    joinDate: useSelector((state) => state.joinDate),
  };

  return (
    <div class="second">
      {props.showProfilePage ? (
        <PROFILE_PAGE
          dispatch={dispatch}
        />
      ) : null}
      {props.showHomePage ? (
        <HOME_PAGE showOtherUserProfile={showOtherUserProfile} />
      ) : null}
      {props.showExplorePage ? (
        <EXPLORE_PAGE_HANDLER showOtherUserProfile={showOtherUserProfile} />
      ) : null}
      {props.showOtherUserProfile ? (
        <OTHER_USER_PROFILE_HANDLER
          username={userDataObject.username}
          userUid={userDataObject.userUid}
          dispatch={dispatch}
        />
      ) : null}
    </div>
  );
};

  