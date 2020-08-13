import React from "react";
import firebase from "firebase";
import { useSelector } from "react-redux";

export function UNLIKE_BUTTON(props) {
  const uniqueUid = useSelector((state) => state.uidInt);
  const decrement = firebase.firestore.FieldValue.increment(-1);

  let unlikeTweedInFirebase = () => {
    props.false()
    firebase
      .firestore()
      .collection("users")
      .doc(props.uid)
      .collection("userTweeds")
      .get()
      .then((items) => {
        items.forEach((doc) => {
          if (doc.id === props.id) {
            firebase
              .firestore()
              .collection("users")
              .doc(props.uid)
              .collection("userTweeds")
              .doc(doc.id)
              .update({
                likedCount: decrement,
              });
          }
        });
      })
      .then(
        firebase
          .firestore()
          .collection("users")
          .doc(uniqueUid)
          .collection("likedTweeds")
          .get()
          .then((items) => {
            items.forEach((doc) => {
              if (doc.data().id === props.id) {
                firebase
                  .firestore()
                  .collection("users")
                  .doc(uniqueUid)
                  .collection("likedTweeds")
                  .doc(doc.id)
                  .delete();
              }
            });
          })
      );
  };

  return (
    <>
      <button onClick={unlikeTweedInFirebase}>Unlike</button>
    </>
  );
}
