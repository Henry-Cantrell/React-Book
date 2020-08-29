import { USER_AVATAR } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/useravatar";
import React from "react";
import firebase from "firebase";
import { eraseAllUserInfo } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/erasealluserinfo";
import { captureForOtherUserInfo } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/captureForOtherUserInfo";
import { otherUserUidClear } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otherUserUidClear";
import { otherUserUidSend } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otherUserUidSend";
import { toggleOtherUserProfilePage } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otherUserProfilePageToggle";
import { toggleOffAll } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/postAuthContentActions/toggleAllOff";
import { useDispatch, useSelector } from "react-redux";
import { otherUserProfileFavToggle } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otherUserProfileFavToggle";

export let UserAvatarClickHandler = (props) => {
  const dispatch = useDispatch();
  const otherUserProfileToggle = useSelector(
    (state) => state.otherUserProfileToggle
  );
  const otherUserProfileToggleFavorite = useSelector(
    (state) => state.otherUserProfileToggleFavorite
  );

  let handleProfileClick = () => {
    let checkForFavPageToggle = () => {
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

    let dispatchReduxActions = () => {
      dispatch(otherUserUidClear());
      dispatch(otherUserUidSend(props.uid));
    };

    let firebaseCaptureUserInfo = () => {
      firebase
        .firestore()
        .collection("users")
        .doc(props.uid)
        .get()
        .then((doc) => {
          dispatch(eraseAllUserInfo());
          dispatch(
            captureForOtherUserInfo({
              otherUserDataObject: 0,
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
    checkForFavPageToggle();
    dispatchReduxActions();
    firebaseCaptureUserInfo();
  };

  return (
    <div
      onClick={
        props.forOtherUser === undefined ? null : handleProfileClick
      }
    >
      <USER_AVATAR
        uid={props.uid}
        tweedText={props.tweedText}
        username={props.username}
      />
    </div>
  );
};