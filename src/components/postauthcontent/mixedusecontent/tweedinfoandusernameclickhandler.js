import React from "react";
import firebase from "firebase";
import { eraseAllUserInfo } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/erasealluserinfo";
import { captureForOtherUserInfo } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/captureForOtherUserInfo";
import { otherUserUidClear } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otherUserUidClear";
import { otherUserUidSend } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otherUserUidSend";
import { toggleOtherUserProfilePage } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otherUserProfilePageToggle";
import { toggleOffAll } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/postAuthContentActions/toggleAllOff";
import { useDispatch } from "react-redux";

export let TWEED_INFO_AND_USERNAME_CLICK_HANDLER = (props) => {
  const dispatch=useDispatch();
  let handleProfileClick = () => {
    props.dispatch(toggleOffAll());
    props.dispatch(toggleOtherUserProfilePage("ON"));

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

    dispatchReduxActions();
    firebaseCaptureUserInfo();
  };

  return (
    <div onClick={handleProfileClick}>
      <div className="tweedInTweedBox">{props.retweetedBy}</div>
      <div className="userNameInTweedBox">
        {`Tweed content: ${props.tweedText}`}
      </div>
      {props.button}
    </div>
  );
};
