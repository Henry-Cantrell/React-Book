import React from 'react'
import {Modal_Class_Form} from './modalcc'
import {fireBaseExternalObj} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/firebasedeps'

export class User_Auth_Joiner extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loginStatus: false,
        inputFieldClear: true
      };
    }
  
    componentDidMount() {
      //User log in method
      const loginForm = document.querySelector("#loginForm");
  
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const loginEmail = document.querySelector("#loginEmail").value;
        const loginPassword = document.querySelector("#loginPassword").value;
  
        fireBaseExternalObj.auth.signInWithEmailAndPassword(
          loginEmail,
          loginPassword
        );
      });
  
      //User sign in method
      const signupForm = document.querySelector("#signupForm");
  
      signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
       const signupEmail = document.querySelector("#signupEmail").value;
        const signupPassword = document.querySelector("#signupPassword").value;
  
        fireBaseExternalObj.auth.createUserWithEmailAndPassword(
          signupEmail,
          signupPassword
        );
      });
    }
  
    render() {
      return <Modal_Class_Form />;
    }
  }
  

//all content for user auth page should be in this cc's render statement for de-mounting on user auth clear
//to-do list: 
//add conditional de-mounting on successful sign-up or log in via .then to auth methods
//capture uid for further use 
//import and display main page content after user auth page de-mounted (is it actually possible do this?...)