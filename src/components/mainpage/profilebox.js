import React from 'react'
import {useSelector} from 'react-redux'

export let USER_PROFILE_BOTTOM_LEFT_BOX = (props) => {

    let userName = useSelector((state) => state.userName)

    return (
        <div id='blbMaster'>
            <div id='profileNameBlb'>
            </div>
            <div id='usernameBlb'>
            {`@${userName}`}
            </div>
        </div>
    );
  };
  
