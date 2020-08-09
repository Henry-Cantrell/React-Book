import React from 'react'
import {TWEED_BOX} from './tweedbox'
import {useSelector} from 'react-redux'
import firebase from 'firebase'

export function TWEED_BOX_FORM(props) {
    const uniqueUid = useSelector((state) => state.uidInt);
  
    //this method assigns unique values to the userTweeds col for captured tweed info based on size of userTweeds col size
  
    let sendTweedToFirebaseGlobal = (e) => {
      e.preventDefault();

      const tweedFetch = document.getElementById("tweedBox").value;

      firebase
        .firestore()
        .collection("globalTweeds")
        .doc(uniqueUid)
        .add({
          tweed: tweedFetch,
          created: firebase.firestore.FieldValue.serverTimestamp(),
          uid: uniqueUid
        });
    }

    let sendTweedToFirebase = (e) => {
      e.preventDefault();
  
      const tweedFetch = document.getElementById("tweedBox").value;
  
      firebase
        .firestore()
        .collection("users")
        .doc(uniqueUid)
        .collection("userTweeds")
        .add({
          tweed: tweedFetch,
          created: firebase.firestore.FieldValue.serverTimestamp()
        });
    };

    return (
      <form onSubmit={sendTweedToFirebase, sendTweedToFirebaseGlobal} className="tweedboxform">
        <TWEED_BOX />
      </form>
    );
  }
  

  