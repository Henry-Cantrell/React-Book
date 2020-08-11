import React from 'react'
import firebase from 'firebase'
import {useSelector} from 'react-redux'

export function FOLLOW_BUTTON(props) {
  const uniqueUid = useSelector((state) => state.uidInt);

  let followUser = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(uniqueUid)
      .collection("followedUserUids")
      .doc(props.uid)
      .set({
        uid: props.uid,
      });
  };

  let unfollowUser = () => {
    firebase
      .firestore()
      .collection('users')
      .doc(uniqueUid)
      .collection('followedUserUids')
      .doc(props.uid)
      .delete()
  }

  let uidEqualizerCheck = () => {
    if (uniqueUid === props.uid) {
      return true;
    } else {
      return false;
    }
  };

  let isUserFollowed = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(uniqueUid)
      .collection('followedUserUids')
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          if (doc.data().uid === uniqueUid) {
            return true;
          }
        });
      });
  };
  

  return (
    <>
      {uidEqualizerCheck() && isUserFollowed() ? null : (
        <button onClick={followUser}>Follow</button>
      )}
    </>
  );
}



