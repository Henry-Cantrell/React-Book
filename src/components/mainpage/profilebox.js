import React from 'react'
import {useSelector} from 'react-redux'
import { fireBaseExternalObj } from '../../firebasedeps'
import {useDispatch} from 'react-redux'
import {userNameNet} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/userNameNet'

export let USER_PROFILE_BOTTOM_LEFT_BOX = (props) => {

    const dispatch = useDispatch()
    const uniqueUid = (useSelector((state) => state.uidInt))

    let getUsernameFromFirestore = () => {
        const docRef = fireBaseExternalObj.dataBase.collection('users').doc(uniqueUid)

        docRef.get().then(function(doc) {
            if (doc.exists) {
                dispatch(userNameNet(doc.data().username));
            } else {
                window.alert('No username in firebase')
            }
        }).catch(function(error) {
            window.alert('Error with document retrival method in profilebox.js')
        });
    }

    getUsernameFromFirestore()

    let userName = useSelector((state) => state.userName)

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