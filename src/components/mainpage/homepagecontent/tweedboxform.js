import React from 'react'
import {fireBaseExternalObj} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/firebasedeps'
import {TWEED_BOX} from './tweedbox'
import {useSelector} from 'react-redux'
import firebase from 'firebase'

export function TWEED_BOX_FORM(props) {

    const uniqueUid = useSelector((state) => state.uidInt)

    let sendTweedToFirebase = (e) => {

        e.preventDefault()

        const docRef = firebase.firestore().collection('users').doc(uniqueUid).collection('tweeds').doc('tweedlist')

    }

    return (
      <form onSubmit={sendTweedToFirebase} id="tweedboxform">
        <TWEED_BOX/>
      </form>
    );
  }

  //to-do list:
  //need to research how to loop through a firebase collection to assign tweeds unique IDs --->
  //---> that can then be accessed through methods throughout codebase?
  