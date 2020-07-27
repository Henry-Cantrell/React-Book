import React from 'react'
import {Modal_Class} from './UserAuthcc'
import {useDispatch} from 'react-redux'
import {logIn} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/logInUser'

export let MODAL_CLASS_FORM = () => {

  const dispatch = useDispatch

  return (
    <div>
      <div class="login_modals_graphics">
        <div class="header_style_external">
          <h2> Check out my modals: </h2>
        </div>
        <Modal_Class
          loginStateUpdate={dispatch(logIn)}
          formID="loginForm"
          passwordID="loginPassword"
          emailID="loginEmail"
          function="Log in to an account"
          action="Log in"
          purpose="Log into an account"
        />
        <Modal_Class
          loginStateUpdate={dispatch(logIn)}
          formID="signupForm"
          passwordID="signupPassword"
          emailID="signupEmail"
          function="Sign up for a new account"
          action="Sign up"
          purpose="Sign up with this form"
        />
      </div>
    </div>
  );
};

  
  
