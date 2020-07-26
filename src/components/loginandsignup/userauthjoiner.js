import React from 'react'
import {Modal_Class_Form} from './modalcc'

export class User_Auth_Joiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: false,
    }
  }

  render() {
    const userAuthPage = (
      <Modal_Class_Form
      />
    );

    return <div>{userAuthPage}</div>;
  }
}

//handle change evt from this component 

//all final graphics content for user auth page should be in a parent cc's render statement for de-mounting on user auth clear

//to-do list: 
//add conditional de-mounting on successful sign-up or log in via .then to auth methods
//capture uid for further use 
//import and display main page content after user auth page de-mounted (is it actually possible do this?...)
