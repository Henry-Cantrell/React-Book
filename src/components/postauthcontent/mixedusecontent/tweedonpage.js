import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PROFILE_INFO_USERNAME_HOVER } from "./ProfileInfoFromUsernameHover";
import { TWEED_INFO_AND_USERNAME_CLICK_HANDLER } from "./tweedinfoandusernameclickhandler";
import { LIKE_AND_FAV_BUTTONS } from "./likeandfavbuttons";

export function TWEED_DIV_ON_PAGE(props) {
  const userUid = useSelector((state) => state.userUid);
  const username = useSelector((state) => state.username);

  return (
    <div className="tweed-box-holding-tweeds">
      <PROFILE_INFO_USERNAME_HOVER
        username={props.username}
        usernameOfCurrentUser={username}
        userUid={userUid}
        uid={props.uid}
        tweedText={props.tweedText}
      ></PROFILE_INFO_USERNAME_HOVER>
      <div className="div-for-likedby-tweed">{props.likedBy}</div>
      <div className="div-for-likefav-buttons-tweed">
        <LIKE_AND_FAV_BUTTONS
          likeButton={props.likeButton}
          favoriteButton={props.favoriteButton}
        />
      </div>
    </div>
  );
}
