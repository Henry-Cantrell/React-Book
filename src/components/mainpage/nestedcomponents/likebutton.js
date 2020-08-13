import React from "react";
import firebase from "firebase";
import { useSelector } from "react-redux";

export function LIKE_BUTTON(props) {
  const uniqueUid = useSelector((state) => state.uidInt);
  const increment = firebase.firestore.FieldValue.increment(1);

  let likeCountToFirebase = () => {
    props.true();
    firebase
      .firestore()
      .collection("users")
      .doc(props.uid)
      .collection("userTweeds")
      .doc(props.id)
      .update({
        likedCount: increment,
      })
      .then(
        firebase
          .firestore()
          .collection("users")
          .doc(uniqueUid)
          .collection("likedTweeds")
          .doc()
          .set({
            tweed: props.tweed,
            username: props.username,
            id: props.id,
          })
      );
  };
  
  return (
    <>
      <button onClick={likeCountToFirebase}>Like</button>
      <LIKE_COUNT_DISPLAY/>
    </>
  );
}