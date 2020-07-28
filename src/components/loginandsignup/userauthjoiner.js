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

//to-do list: 
//create component that accesses uid within store and displays user-specific content from firebase
