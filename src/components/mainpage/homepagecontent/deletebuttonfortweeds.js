import React from 'react'
import firebase from 'firebase'
import {useSelector} from 'react-redux'

export function DELETE_BUTTON(props) {
    const uid = useSelector((state) => state.uidInt);
  
    const deleteTweed = () => {
      firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .collection("userTweeds")
        .doc()
        .delete();
    };
  
    return (
      <>
        <button className="tweedCrudButton" onClick={}>
          {props.text}
        </button>
      </>
    );
  }
  