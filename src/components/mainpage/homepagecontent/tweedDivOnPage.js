import React from "react";
import { captureForOtherUserInfo } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/captureForOtherUserInfo";
import { useDispatch } from "react-redux";
import firebase from "firebase";
import { eraseAllUserInfo } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/erasealluserinfo";

export function TWEED_DIV_ON_PAGE(props) {
  const dispatch = useDispatch();

  let captureForOtherUserProfileShow = () => {
    props.showOtherUserProfile();

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

  return (
    <div className="tweedBoxHoldingTweeds">
      <div>
        <div onClick={captureForOtherUserProfileShow}>
          <div className="tweedInTweedBox">
            <div>{props.likedBy}</div>
            {props.retweetedBy}
            {props.username}
          </div>
          <div className="userNameInTweedBox">
            {`Tweed content: ${props.tweedText}`}
          </div>
          {props.button}
        </div>
        <div className="elevateLikeAndFav">
          {props.likeButton}
          {props.retweedButton}
        </div>
      </div>
    </div>
  );
  
  
}
