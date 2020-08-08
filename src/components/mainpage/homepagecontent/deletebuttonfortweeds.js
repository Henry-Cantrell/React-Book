import React from 'react'
import firebase from 'firebase'
import {useSelector} from 'react-redux'

export function DELETE_BUTTON(props) {
    const uid = useSelector((state) => state.uidInt);
  
    let getTweedsFromFirebase = () => {
        firebase
          .firestore()
          .collection("users")
          .doc(uniqueUid)
          .collection("userTweeds")
          .orderBy("created", "asc")
          .onSnapshot((snapshot) => {
            dispatch(clearTweedStore());
            snapshot.forEach((doc) => {
              dispatch(
                tweedSend({ tweed: doc.data().tweed, created: doc.data().created })
              );
            });
          });
      };

    return (
      <>
        <button className="tweedCrudButton" onClick={getTweedsFromFirebase}>
          {props.text}
        </button>
      </>
    );
  }
  