import React from "react";
import firebase from "firebase";
import { useSelector } from "react-redux";
import {sendFollowedCount} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendFollowedCountToRedux'
import {sendFollowerCount} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendFollowerCountToRedux'
import {useDispatch} from 'react-redux'

export function FOLLOWER_AND_FOLLOWED_CONTENT () {
  const uniqueUid = useSelector((state) => state.uidInt);
  const dispatch = useDispatch()

  let retrieveFollowedCountFromFirebaseToRedux = () => {
    firebase
      .firestore()
      .collection("users")
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          if (doc.data().uid === uniqueUid) {
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
          if (doc.data().uid === uniqueUid) {
            dispatch(sendFollowerCount(doc.data().followerCount));
          }
        });
      });
  };

  retrieveFollowedCountFromFirebaseToRedux()
  retrieveFollowerCountFromFirebaseToRedux()
  
  return (
    <>
      <div>{`Number of users followed: ${useSelector((state) => state.followedCount)}`}</div>
      <div>{`Number of users following: ${useSelector((state) => state.followerCount)}`}</div>
    </>
  );
};

