import React from 'react'
import {useSelector} from 'react-redux'
import {SIGN_OUT_BOX} from './nestedcomponents/signoutboxblb'

export let USER_PROFILE_BOTTOM_LEFT_BOX = () => {
    
    const toggleSob = useSelector((state) => state.sobBlbOn)

    return (
        <div>
        {toggleSob ? <SIGN_OUT_BOX/> : null}
        <div id='blbMaster'>
            <div id='profileNameBlb'>
            </div>
            <div id='usernameBlb'>
            {`@${useSelector((state) => state.userName)}`}
            </div>
        </div>
        </div>
    )
    }
  
