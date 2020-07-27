import React from 'react'
import {Modal_Class_Form} from './modalcc'
import { useSelector } from 'react-redux'

export let USER_AUTH_JOINER = () => {

    const isLogged = useSelector(state => state.isLogged)
    
    return (

    <div>
      {isLogged ? <h3>HELLO I AM FROM ANCIENT G R E E C E</h3> : <Modal_Class_Form/>}
    </div>
    )
  }


//bring together all page graphics here for final placement depending on login status
//when state.loggedIn is true, render main page via state update to variable definition; simply reverse for false case

//to-do list: 
//add conditional de-mounting on successful sign-up or log in via .then to auth methods
//capture uid for further use 
//import and display main page content after user auth page de-mounted (is it actually possible do this?...)
