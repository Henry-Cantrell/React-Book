import React from 'react'
import firebase from 'firebase'
import {useSelector} from 'react-redux'

export function DELETE_BUTTON(props) {
    const uid = useSelector((state) => state.uidInt);
  
    let getTweedsFromFirebase = () => {
        firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .collection("userTweeds")
          .orderBy("created", "asc")
          .onSnapshot((snapshot) => {
            snapshot.forEach((doc) => {
              if (doc.data().created === props.created) {
                firebase
                .firestore()
                .collection('users')
                .doc(uid)
                .collection('userTweeds')
                .doc(doc.data())
                .delete()
              }
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
  