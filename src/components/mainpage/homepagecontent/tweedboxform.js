import React from 'react'
import {TWEED_BOX} from './tweedbox'
import {useSelector} from 'react-redux'
import firebase from 'firebase'

export function TWEED_BOX_FORM(props) {
  const uniqueUid = useSelector((state) => state.uidInt);
  const username = useSelector((state) => state.userName)

  let sendTweedsToFirebase = (e) => {
    e.preventDefault();

    const tweedFetch = document.getElementById("tweedBox").value;

    firebase
      .firestore()
      .collection("users")
      .doc(uniqueUid)
      .collection("userTweeds")
      .add({
        tweed: tweedFetch,
        created: firebase.firestore.FieldValue.serverTimestamp(),
        username: username
      })
      .then(
        firebase.firestore().collection("globalTweeds").add({
          tweed: tweedFetch,
          created: firebase.firestore.FieldValue.serverTimestamp(),
          username: username
        })
      );
  };

  return (
    <form onSubmit={sendTweedsToFirebase} className="tweedboxform">
      <TWEED_BOX />
    </form>
  );
}


  