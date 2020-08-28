import React from "react";
import { captureForOtherUserInfo } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/captureForOtherUserInfo";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase";
import { eraseAllUserInfo } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/erasealluserinfo";
import { otherUserUidClear } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otherUserUidClear";
import { otherUserUidSend } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otherUserUidSend";
import { toggleOtherUserProfilePage } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otherUserProfilePageToggle";
import { toggleOffAll } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/postAuthContentActions/toggleAllOff";
import { otherUserProfileFavToggle } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otherUserProfileFavToggle";


export function PROFILE_FROM_LIKEDBY_MESSAGE(props) {
  const dispatch = useDispatch();
  const otherUserProfileToggle = useSelector(
    (state) => state.otherUserProfileToggle
  );
  const otherUserProfileToggleFavorite = useSelector(
    (state) => state.otherUserProfileToggleFavorite
  )

  let handleLikedByClick = () => {
    dispatch(otherUserUidClear());
    dispatch(otherUserUidSend(props.uid));

    let reduxProcessClick = () => {
        if (otherUserProfileToggle && !otherUserProfileToggleFavorite) {
          dispatch(toggleOtherUserProfilePage("OFF"));
          dispatch(otherUserProfileFavToggle("ON"));
        } else if (!otherUserProfileToggle && !otherUserProfileToggleFavorite) {
          dispatch(toggleOffAll());
          dispatch(toggleOtherUserProfilePage("ON"));
        } else if (otherUserProfileToggle && otherUserProfileToggleFavorite) {
          dispatch(otherUserProfileFavToggle("OFF"));
        } else if (!otherUserProfileToggle && otherUserProfileToggleFavorite) {
          dispatch(otherUserProfileFavToggle("OFF"));
          dispatch(toggleOtherUserProfilePage("ON"));
        }
    };

    let fbHandleClick = () => {
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
    reduxProcessClick();
    fbHandleClick();
  };
  return (
    <div
      onClick={handleLikedByClick}
    >{`This tweed liked by: ${props.usernameOfLiker}`}</div>
  );
}
