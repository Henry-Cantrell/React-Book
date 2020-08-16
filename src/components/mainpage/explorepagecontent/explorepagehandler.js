import React from 'react'
import firebase from 'firebase'
import {useDispatch, useSelector} from 'react-redux'
import {clearTweedStoreGlobal} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/tweedClearGlobal'
import {tweedSendGlobal} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/tweedSendGlobal'
import EXPLORE_PAGE from './explorepage'

export let EXPLORE_PAGE_HANDLER = () => {
    const dispatch = useDispatch();
    const uniqueUid = useSelector((state) => state.uidInt)
    const usernameOfCurrentUser = useSelector((state) => state.userName)
  
    let getGlobalTweedsFromFirebase = () => {
      firebase
        .firestore()
        .collection("globalTweeds")
        .orderBy("created", "asc")
        .onSnapshot((snapshot) => {
          dispatch(clearTweedStoreGlobal());
          snapshot.forEach((doc) => {
            if (doc.data().uid != uniqueUid){
            dispatch(
              tweedSendGlobal({
                tweed: doc.data().tweed,
                created: doc.data().created,
                username: doc.data().username,
                uid: doc.data().uid,
                id: doc.id,
              })
            )};
          });
        });
    };
  
    getGlobalTweedsFromFirebase();
  
    return (
      <div className="explorePageDiv">
        <EXPLORE_PAGE uniqueUid={uniqueUid} usernameOfCurrentUser={usernameOfCurrentUser}/>
      </div>
    );
  };
  