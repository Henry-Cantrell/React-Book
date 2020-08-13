import React from 'react'
import {TWEED_BOX} from './tweedbox'
import {useSelector} from 'react-redux'
import firebase from 'firebase'
import {counterSend} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/counterSend'
import {useDispatch} from 'react-redux'

export function TWEED_BOX_FORM(props) {
  const uniqueUid = useSelector((state) => state.uidInt);
  const username = useSelector((state) => state.userName)
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  const increment = firebase.firestore.FieldValue.increment(1)

  let counterFromFirebaseToRedux = () => {
    firebase
      .firestore()
      .collection("counterForTweedRelation")
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          dispatch(counterSend(doc.data().counter ));
        });
      })
  };
  
  counterFromFirebaseToRedux()

  let sendTweedsToFirebaseAndUpdateCounter = (e) => {
    e.preventDefault();
  
    const tweedFetch = document.getElementById("tweedBox").value;
  
    firebase
      .firestore()
      .collection("counterForTweedRelation")
      .doc('counter')
      .update({
        counter: increment,
      })
      .then(
        firebase
          .firestore()
          .collection("users")
          .doc(uniqueUid)
          .collection("userTweeds")
          .doc(`counter${counter}`)
          .set({
            tweed: tweedFetch,
            created: firebase.firestore.FieldValue.serverTimestamp(),
            username: username,
            uid: uniqueUid,
            likedCount: 0
          })
      )
      .then(
        firebase
          .firestore()
          .collection("globalTweeds")
          .doc(`counter${counter}`)
          .set({
            tweed: tweedFetch,
            created: firebase.firestore.FieldValue.serverTimestamp(),
            username: username,
            uid: uniqueUid,
            likedCount: 0
          })
      );
  };
  

  return (
    <form onSubmit={sendTweedsToFirebaseAndUpdateCounter} className="tweedboxform">
      <TWEED_BOX />
    </form>
  );
}


  