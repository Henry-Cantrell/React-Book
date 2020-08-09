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

  let counterFromFirebaseToRedux = () => {
    firebase
      .firestore()
      .collection("counterForTweedRelation")
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          dispatch(counterSend({ counter: doc.data().counter }));
        });
      });
  };
  
  counterFromFirebaseToRedux()

  let sendTweedsToFirebase = (e) => {
    e.preventDefault();

    const tweedFetch = document.getElementById("tweedBox").value;

    firebase
      .firestore()
      .collection("users")
      .doc(uniqueUid)
      .collection("userTweeds")
      .doc('test123')
      .set({
        tweed: tweedFetch,
        created: firebase.firestore.FieldValue.serverTimestamp(),
        username: username
      })
      .then(
        firebase.firestore().collection("globalTweeds").doc('test123').set({
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


  