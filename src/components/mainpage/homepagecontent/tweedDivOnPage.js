import React from "react";
import { captureForOtherUserInfo } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/captureForOtherUserInfo";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase";
import { eraseAllUserInfo } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/erasealluserinfo";
import { PROFILE_INFO_USERNAME_HOVER } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/profileinfofromusernamehover";

export function TWEED_DIV_ON_PAGE(props) {
  const dispatch = useDispatch();
  const uniqueUid = useSelector((state) => state.uidInt);
  const username = useSelector((state) => state.userName);

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
        <div>{props.likedBy}</div>
        <div onClick={captureForOtherUserProfileShow}>
          <div className="tweedInTweedBox">
            {props.retweetedBy}
            {
              <PROFILE_INFO_USERNAME_HOVER
                usernameOfCurrentUser={username}
                uniqueUid={uniqueUid}
                uid={tweed.uid}
              />
            }
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