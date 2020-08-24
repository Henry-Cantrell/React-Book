import React from "react";
import { useSelector } from "react-redux";
import { PROFILE_INFO_USERNAME_HOVER } from "./profileinfofromusernamehover";
import { TWEED_INFO_AND_USERNAME_CLICK_HANDLER } from "./tweedinfoandusernameclickhandler";
import { LIKE_AND_FAV_BUTTONS } from "./likeandfavbuttons";

export function TWEED_DIV_ON_PAGE(props) {
  const userUid = useSelector((state) => state.userUid);
  const username = useSelector((state) => state.username);

  return (
    <div className="tweedBoxHoldingTweeds">
      <div>
        <PROFILE_INFO_USERNAME_HOVER
          username={props.username}
          usernameOfCurrentUser={username}
          userUid={userUid}
          uid={props.uid}
        />
        <div>{props.likedBy}</div>
        <TWEED_INFO_AND_USERNAME_CLICK_HANDLER
          retweededBy={props.retweededBy}
          tweedText={props.tweedText}
          button={props.button}
          showOtherUserProfile={props.showOtherUserProfile}
        />
        <LIKE_AND_FAV_BUTTONS
          likeButton={props.likeButton}
          favoriteButton={props.favoriteButton}
        />
      </div>
    </div>
  );
}