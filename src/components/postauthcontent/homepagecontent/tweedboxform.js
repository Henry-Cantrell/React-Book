import React from "react";
import { TWEED_BOX } from "./tweedbox";
import { useSelector } from "react-redux";
import firebase from "firebase";
import { counterSend } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/counterSend";
import { useDispatch } from "react-redux";

export let TWEED_BOX_FORM = () => {
  const userUid = useSelector((state) => state.userUid);
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const increment = firebase.firestore.FieldValue.increment(1);

  let handleTweedSubmission = (e) => {
    let counterFromFirebaseToRedux = () => {
      firebase
        .firestore()
        .collection("counterForTweedRelation")
        .onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            dispatch(counterSend(doc.data().counter));
          });
        });
    };

    let updateCounter = (e) => {
      e.preventDefault();

      firebase
        .firestore()
        .collection("counterForTweedRelation")
        .doc("counter")
        .update({
          counter: increment,
        });
    };

    let giveUsertweedToFb = () => {
      const tweedFetch = document.getElementById("tweedBox").value;

      firebase
        .firestore()
        .collection("users")
        .doc(userUid)
        .collection("userTweeds")
        .doc(`counter${counter}`)
        .set({
          tweed: tweedFetch,
          created: firebase.firestore.FieldValue.serverTimestamp(),
          username: username,
          uid: userUid,
        })
        .then(
          firebase
            .firestore()
            .collection("likeCountForUserTweeds")
            .doc(`counter${counter}`)
            .set({
              likeCount: 0,
            })
            .then(
              firebase
                .firestore()
                .collection("favoriteCountForUserTweeds")
                .doc(`counter${counter}`)
                .set({
                  favoriteCount: 0,
                })
            )
        );
    };
    if (document.getElementById("tweedBox").value.length != 0) {
      counterFromFirebaseToRedux();
      updateCounter(e);
      giveUsertweedToFb();
    } else {
      window.alert("Please enter some text for your post");
      e.preventDefault();
    }
  };

  return (
    <form onSubmit={handleTweedSubmission} className="tweedboxform">
      <TWEED_BOX />
    </form>
  );
};
