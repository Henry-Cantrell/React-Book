import React from 'react'
import {useSelector} from 'react-redux'
import { fireBaseExternalObj } from '../../firebasedeps'
import {useDispatch} from 'react-redux'
import {userNameNet} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/userNameNet'
import firebase from 'firebase'

export let USER_PROFILE_BOTTOM_LEFT_BOX = (props) => {

    const fireStoreRef = firebase.firestore();
    const dispatch = useDispatch()
    const uniqueUID = useSelector((state) => state.uidInt)
    const userEmail = useSelector((state) => state.userEmail)

    let getUsernameFromFirestore = () => {
        const docRef = fireBaseExternalObj.dataBase.collection('users').doc(uniqueUID)

        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log(dispatch(userNameNet(doc.data().username)));
            } else {
                window.alert('No username in firebase')
            }
        }).catch(function(error) {
            window.alert('Error with document retrival method in profilebox.js')
        });
    }

    getUsernameFromFirestore()

    const userNameFromLogin = useSelector((state) => state.usernameFromLogin)
    const userNameFromSignup = useSelector((state) => state.userNameFromSignIn)

    let userName = ''

    let decideUsernameDefinition = () => {
        if (userNameFromLogin != 'empty') {
            userName = userNameFromLogin
        } else {
            userName = userNameFromSignup
        }
    }

    decideUsernameDefinition()

    return (
        <div id='blbMaster'>
            <div id='profileNameBlb'>
            </div>
            <div id='emailBlb'>
            {`@${userName}`}
            </div>
        </div>
    );
  };
  
//to-do:
//create styled div box with user email, profile name and (eventually) avatar color circle 
//create state for user profile name in Redux and also add to firestore 