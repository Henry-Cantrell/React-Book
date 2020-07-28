import React from 'react'
import {MODAL_CLASS_FORM} from './modalcc'
import { useSelector } from 'react-redux'
import {USER_PROFILE_BOTTOM_LEFT_BOX} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/profilebox'

export let USER_AUTH_JOINER = () => {

    const isLogged = useSelector(state => state.isLogged)
    
    return (

    <div>
      {isLogged ? <USER_PROFILE_BOTTOM_LEFT_BOX/> : <MODAL_CLASS_FORM/>}
    </div>
    )
  }

