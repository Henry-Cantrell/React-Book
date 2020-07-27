import React from 'react'
import {MODAL_CLASS_FORM} from './modalcc'
import { useSelector } from 'react-redux'

export let USER_AUTH_JOINER = () => {

    const isLogged = useSelector(state => state.isLogged)
    
    return (

    <div>
      {isLogged ? <h3>HELLO I AM FROM ANCIENT G R E E C E</h3> : <MODAL_CLASS_FORM/>}
    </div>
    )
  }


//bring together all page graphics here for final placement depending on login status

//to-do list: 
//capture uid in Redux state for further use 
//import and display main page content after user auth page de-mounted (is it actually possible do this?...)
