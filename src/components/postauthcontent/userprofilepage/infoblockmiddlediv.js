import React from "react";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { sendFollowedCount } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendFollowedCountToRedux";
import { sendFollowerCount } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendFollowerCountToRedux";
import { useDispatch } from "react-redux";

export let USER_INFO_BLOCK_MIDDLE_DIV = (props) => {
  const userUid = useSelector((state) => state.userUid);
  const dispatch = useDispatch();
  const followedCount = useSelector((state) => state.followedCount);
  const followerCount = useSelector((state) => state.followerCount);

  let retrieveFollowedCountFromFirebaseToRedux = () => {
    firebase
      .firestore()
      .collection("users")
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          if (doc.data().uid === userUid) {
            dispatch(sendFollowedCount(doc.data().followedCount));
          }
        });
      });
  };

  let retrieveFollowerCountFromFirebaseToRedux = () => {
    firebase
      .firestore()
      .collection("users")
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          if (doc.data().uid === userUid) {
            dispatch(sendFollowerCount(doc.data().followerCount));
          }
        });
      });
  };

  retrieveFollowedCountFromFirebaseToRedux();
  retrieveFollowerCountFromFirebaseToRedux();

  return (
    <>
      <div class="username-user-profile-page">{props.username}</div>
      <div class="user-bio-user-profile-page">{props.userBio}</div>
      <div className="user-info-block-lower-div">
        <div class="user-join-date-display">
          <i class="far fa-calendar-alt"></i>
          <div className="text-inside-joindate">{props.joinDate}</div>
        </div>
        <div className="followed-count-user">
          <div className='following-text'>{followedCount}</div> <div className='move-following'>following</div>
        </div>
        <div className="followerCount"></div>
      </div>
    </>
  );
};

