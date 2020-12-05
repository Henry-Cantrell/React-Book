import React from "react";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { sendFollowedCount } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendFollowedCountToRedux";
import { sendFollowerCount } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendFollowerCountToRedux";
import { useDispatch } from "react-redux";

export function FOLLOWER_AND_FOLLOWED_CONTENT(props) {

  return (
    <>
      {props.forOtherUser === undefined ? (
        null
      ) : (
        <div>{`Number of users following: ${props.followedCountOtherUser}`}</div>
      )}
      {props.forOtherUser === undefined ? (
        null
      ) : (
        <div>{`Number of users following: ${props.followerCountOtherUser}`}</div>
      )}
    </>
  );
}
