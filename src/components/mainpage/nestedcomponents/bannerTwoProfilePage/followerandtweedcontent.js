import React from "react";
import firebase from "firebase";
import { useSelector } from "react-redux";

export let followerAndTweedContent = () => {
  const uniqueUid = useSelector((state) => state.uniqueUid);

  let retrieveFollowedCountFromFirebase = () => {
    firebase
      .firestore()
      .doc(uniqueUid)
      .collection("followedUids")
      .onSnapshot((snapshot) => {
        return snapshot.size;
      });
  };

  let retrieveFollowerCountFromFirebase = () => {
    firebase
      .firestore()
      .doc(uniqueUid)
      .collection("followerCount")
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          return doc.data().followerCount;
        });
      });
  };

  return (
    <>
      <div>{retrieveFollowedCountFromFirebase}</div>
      <div>{retrieveFollowerCountFromFirebase}</div>
    </>
  );
};
