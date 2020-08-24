import React from "react";
import firebase from "firebase";
import { useSelector } from "react-redux";

export function UNLIKE_BUTTON(props) {
  const userUid = useSelector((state) => state.userUid);
  const decrement = firebase.firestore.FieldValue.increment(-1);

  let unlikeTweedInFirebase = () => {
    props.false();

    firebase
      .firestore()
      .collection("likedTweeds")
      .doc(userUid)
      .collection('tweedsLikedByUser')
      .get()
      .then((items) => {
        items.forEach((doc) => {
          if (doc.id === props.id) {
            firebase
              .firestore()
              .collection("likedTweeds")
              .doc(userUid)
              .collection('tweedsLikedByUser')
              .doc(doc.id)
              .delete();
          }
        });
      })
      .then(
        firebase
          .firestore()
          .collection("likeCountForUserTweeds")
          .doc(props.id)
          .update({
            likeCount: decrement,
          })
      );
  };

  return (
    <>
      <button onClick={unlikeTweedInFirebase}>Unlike</button>
      {props.likeDisplay}
    </>
  );
}
