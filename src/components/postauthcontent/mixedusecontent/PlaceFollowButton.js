import React from "react";
import firebase from "firebase";

export let PLACE_FOLLOW_BUTTON = (props) => {
  let followUser = () => {
    const increment = firebase.firestore.FieldValue.increment(1);
    props.changeFollowedTrue();
    console.log(props.uid)

    let setFollowedData = () => {
      firebase
        .firestore()
        .collection("users")
        .doc(props.uid)
        .collection("userTweeds")
        .orderBy("created", "asc")
        .get()
        .then((items) => {
          items.forEach((doc) => {
            firebase
              .firestore()
              .collection("users")
              .doc(props.userUid)
              .collection("followedTweeds")
              .doc(doc.id)
              .set({
                tweed: doc.data().tweed,
                username: doc.data().username,
                uid: doc.data().uid,
              });
          });
        })
        .then(
          firebase
            .firestore()
            .collection("users")
            .doc(props.uid)
            .get()
            .then((doc) => {
              firebase
                .firestore()
                .collection("users")
                .doc(props.userUid)
                .collection("followedUserUids")
                .doc(props.uid)
                .set({
                  username: doc.data().username,
                });
            })
        );
    };
    let incrementCounters = () => {
      firebase
        .firestore()
        .collection("users")
        .doc(props.userUid)
        .update({
          followedCount: increment,
        })
        .then(
          firebase.firestore().collection("users").doc(props.uid).update({
            followerCount: increment,
          })
        );
    };
    setFollowedData();
    incrementCounters();
  };
  return <button onClick={followUser}>Follow</button>;
};
