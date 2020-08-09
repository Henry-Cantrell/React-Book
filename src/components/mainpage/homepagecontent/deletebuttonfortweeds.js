import React from 'react'
import firebase from 'firebase'
import {useSelector} from 'react-redux'

export function DELETE_BUTTON(props) {
  const uid = useSelector((state) => state.uidInt);

  let deleteTweed = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .collection("userTweeds")
      .doc(props.id)
      .delete()
      .then(
        firebase
        .firestore()
        .collection("globalTweeds")
        .doc(props.id)
        .delete()
      );
  };

  return (
    <>
      <button className="tweedCrudButton" onClick={deleteTweed}>
        {props.text}
      </button>
    </>
  );
}
