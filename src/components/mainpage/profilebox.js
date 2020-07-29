import React from 'react'
import {useSelector} from 'react-redux'

export let USER_PROFILE_BOTTOM_LEFT_BOX = (props) => {

    const userEmail = useSelector((state) => state.userEmail)
  
    return (
        <div id='blbMaster'>
            <div id='profileNameBlb'>
            </div>
            <div id='emailBlb'>
            {userEmail}
            </div>
        </div>
    );
  };
  
//to-do:
//create styled div box with user email, profile name and (eventually) avatar color circle 
//create state for user profile name in Redux and also add to firestore 