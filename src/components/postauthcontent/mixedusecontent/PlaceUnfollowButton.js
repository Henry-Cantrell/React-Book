import React from "react";
import firebase from "firebase";

export let PLACE_UNFOLLOW_BUTTON = (props) => {
  let unfollowUser = () => {
    const decrement = firebase.firestore.FieldValue.increment(-1);
    props.changeFollowedFalse();

    let deleteMutualItems = () => {
      firebase
        .firestore()
        .collection("users")
        .doc(props.userUid)
        .collection("followedTweeds")
        .get()
        .then((items) => {
          items.forEach((doc) => {
            if (doc.data().uid === props.uid) {
              firebase
                .firestore()
                .collection("users")
                .doc(props.userUid)
                .collection("followedTweeds")
                .doc(doc.id)
                .delete()
                .then(
                  firebase
                    .firestore()
                    .collection("users")
                    .doc(props.userUid)
                    .collection("followedUserUids")
                    .doc(props.uid)
                    .delete()
                );
            }
          });
        });
    };

    let decrementCounts = () => {
      firebase
        .firestore()
        .collection("users")
        .doc(props.userUid)
        .update({
          followedCount: decrement,
        })
        .then(
          firebase.firestore().collection("users").doc(props.uid).update({
            followerCount: decrement,
          })
        );
    };

    let deleteMutualLikes = () => {
      firebase
        .firestore()
        .collection("likedTweedsOfFollowedUsers")
        .doc(props.userUid)
        .collection("tweedPool")
        .get()
        .then((items) => {
          items.forEach((docLiked) => {
            if (docLiked.data().usernameOfLiker === props.username) {
              firebase
                .firestore()
                .collection("likedTweedsOfFollowedUsers")
                .doc(props.userUid)
                .collection("tweedPool")
                .doc(docLiked.id)
                .delete();
            }
          });
        });
    };
    deleteMutualItems();
    decrementCounts();
    deleteMutualLikes();
  };

  return (
    <button className onClick={unfollowUser}>
      Unfollow
    </button>
  );
};
