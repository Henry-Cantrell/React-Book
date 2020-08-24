import React from "react";
import { HEADER_BAR_HOME_PAGE } from "./headerbarhomepage";
import { TWEED_BOX_FORM } from "./tweedboxform";
import FOLLOWED_TWEEDS_ON_HOMEPAGE from "./followedtweedshomepage";
import LIKED_TWEEDS_FROM_FOLLOWED from "./likedtweedsfromfollowed";
import USER_TWEEDS_ON_PAGE from "./usertweedsonpage";

export let HOME_PAGE = (props) => {
  return (
    <div class="homePageContainer">
      <HEADER_BAR_HOME_PAGE />
      <TWEED_BOX_FORM />
      <div className="borderBlock"></div>
      <div className="tweedDisplayList">
        <USER_TWEEDS_ON_PAGE />
        <FOLLOWED_TWEEDS_ON_HOMEPAGE
          showOtherUserProfile={props.showOtherUserProfile}
          dispatch={props.dispatch}
          userUid={props.userUid}
          username={props.username}
        />
        <LIKED_TWEEDS_FROM_FOLLOWED
          showOtherUserProfile={props.showOtherUserProfile}
          username={props.username}
          userUid={props.userUid}
        />
      </div>
    </div>
  );
};
