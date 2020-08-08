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
            snapshot.forEach((doc) => {
              switch (doc.data().created) {
                case () :
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
  