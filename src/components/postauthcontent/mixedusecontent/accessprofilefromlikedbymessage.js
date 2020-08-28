import React from "react";
import { captureForOtherUserInfo } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/captureForOtherUserInfo";
import { useDispatch } from "react-redux";
import firebase from "firebase";
import { eraseAllUserInfo } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/erasealluserinfo";
import {otherUserUidClear} from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otherUserUidClear"
import { otherUserUidSend } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otherUserUidSend";

export function PROFILE_FROM_LIKEDBY_MESSAGE(props) {
  const dispatch = useDispatch()

  let handleLikedByClick = () => {
    dispatch(otherUserUidClear());
    dispatch(otherUserUidSend(props.uid));
    props.showOtherUserProfile()

    firebase
      .firestore()
      .collection("users")
      .doc(props.uid)
      .get()
      .then((doc) => {
        dispatch(eraseAllUserInfo());
        dispatch(
          captureForOtherUserInfo({
            username: doc.data().username,
            uid: doc.data().uid,
            bio: doc.data().userBio,
            joinDate: doc.data().joinDate,
            followedCount: doc.data().followedCount,
            followerCount: doc.data().followerCount,
          })
        );
      });
  };
  return(
      <div onClick={handleLikedByClick}>{`This tweed liked by: ${props.usernameOfLiker}`}</div>
  )
}
