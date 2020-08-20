import React from "react";
import firebase from "firebase";
import { useSelector } from "react-redux";
import {sendFollowedCount} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendFollowedCountToRedux'
import {sendFollowerCount} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendFollowerCountToRedux'
import {useDispatch} from 'react-redux'

export function FOLLOWER_AND_FOLLOWED_CONTENT (props) {
  const uniqueUid = useSelector((state) => state.uidInt);
  const dispatch = useDispatch()
  const followedCount = useSelector((state) => state.followedCount)
  const followerCount = useSelector((state) => state.followerCount)

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
      {props.forOtherUser === undefined ? <div>{`Number of users followed: ${followedCount}`}</div> : <div>{`Number of users followed: ${props.followedCountOtherUser}`}</div>}
      {props.forOtherUser === undefined ? <div>{`Number of users following: ${followerCount}`}</div> : <div>{`Number of users followed: ${props.followerCountOtherUser}`}</div>}
    </>
  );
};

