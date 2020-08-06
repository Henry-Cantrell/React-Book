import React from "react";
import firebase from "firebase";
import { TWEED_DIV_ON_PAGE } from "./tweedDivOnPage";
import {useDispatch} from 'react-redux'
import {tweedSend} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendTweeds'

export function TWEED_SHOW(props) {

    const dispatch = useDispatch()

    let getTweedsFromFirebase = () => {
      firebase
        .firestore()
        .collection("users")
        .doc(this.props.uniqueUid)
        .collection("userTweeds")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            dispatch(tweedSend(doc.data().tweed));
          });
        });
    };
  
    getTweedsFromFirebase();
    console.log(this.state.tweeds);
  
    return this.state.tweeds.map((tweed) => (
      <TWEED_DIV_ON_PAGE tweedText={tweed} />
    ));
  }
  
  
  

//to-do:
//CODE IS BREAKING BECAUSE OF UNDEFINED ASYNC ACTION!!
//convert this into a function component that watches redux for state updates
//add timestamp to tweed method and then sort user tweed data from firebase by timestamp
