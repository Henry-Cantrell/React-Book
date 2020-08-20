import React from "react";
import { captureForOtherUserInfo } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/captureForOtherUserInfo";
import {useDispatch} from 'react-redux'

export function TWEED_DIV_ON_PAGE(props) {

  const dispatch = useDispatch();

  let captureForOtherUserProfileShow = () => {
    props.showOtherUserProfile();

    dispatch(
      captureForOtherUserInfo({
        username: props.username,
        uid: props.uid,
        bio: props.bio,
        joinDate: props.joinDate,
        followedCount: props.followedCount,
        followerCount: props.followerCount
      })
    );
  };

  return (
    <div onClick={captureForOtherUserProfileShow}>
      <div className="tweedBoxHoldingTweeds">
        <div className="tweedInTweedBox">
          <div>{props.likedBy}</div>
          {props.retweetedBy}
          {props.username}
        </div>
        <div className="userNameInTweedBox">
          {`Tweed content: ${props.tweedText}`}
        </div>
        {props.button}
        {props.likeButton}
        {props.retweedButton}
      </div>
    </div>
  );
}
