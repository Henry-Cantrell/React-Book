import React from 'react'
import {useSelector} from 'react-redux'
import { fireBaseExternalObj } from '../../firebasedeps'
import {useDispatch} from 'react-redux'
import {userNameNet} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/userNameNet'
import {USER_PROFILE_BOTTOM_LEFT_BOX} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/profilebox'

export let MAIN_USER_PAGE = (props) => {

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
            window.alert('Error with document retrival method in mainuserpage.js')
        });
    }

    getUsernameFromFirestore()

    //where blb = bottom left box 

    return (
        <USER_PROFILE_BOTTOM_LEFT_BOX userName={`@${useSelector((state) => state.userName)}`}/>
    );
  };
  