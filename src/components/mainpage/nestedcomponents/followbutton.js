import React from 'react'
import firebase from 'firebase'
import {useSelector} from 'react-redux'
import {sendFollowTweeds} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendfollowtweeds'
import {useDispatch} from 'react-redux'

export function FOLLOW_BUTTON (props) {
    const uniqueUid = useSelector((state) => state.uidInt);
    const dispatch = useDispatch();
  
    let followUser = () => {

        console.log(props.uid)

      firebase
        .firestore()
        .collection("users")
        .doc(props.uid)
        .collection('userTweeds')
        .onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            dispatch(
              sendFollowTweeds(doc.data().tweed, doc.data().uid, props.id, props.username)
            );
          });
        })
    };
  
    return (<button onClick={followUser}>Follow</button>);
  }
  



