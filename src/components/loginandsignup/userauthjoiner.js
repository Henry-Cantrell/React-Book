import React from 'react'
import {MODAL_CLASS_FORM} from './modalcc'
import { useSelector } from 'react-redux'
import {MAIN_USER_PAGE} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/mainuserpage'

export let USER_AUTH_JOINER = () => {

  const isLogged = useSelector((state) => state.isLogged)

    return (

    <div>
      {isLogged ? <MAIN_USER_PAGE/> : <MODAL_CLASS_FORM/>}
    </div>
    )
  }

