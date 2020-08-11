import React from 'react'
import firebase from 'firebase'
import {useSelector} from 'react-redux'

export function FOLLOW_BUTTON (props) {
    const uniqueUid = useSelector((state) => state.uidInt);
  
    let followUser = () => {

      firebase
        .firestore()
        .collection("users")
        .doc(uniqueUid)
        .collection('followedUserUids')
        .doc(props.uid)
        .set({
            uid: props.uid
        })
    };
  
    return (<button onClick={followUser}>Follow</button>);
  }
  



