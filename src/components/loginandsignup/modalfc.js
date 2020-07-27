import React from 'react'
import {fireBaseExternalObj} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/firebasedeps'
import {useDispatch} from 'react-redux'
import {logIn} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/logInUser'

export let Modal_Func = (props) => {
  let clearForm = (e) => {
    e.preventDefault();
    document.getElementById(`${props.emailID}`).value = "";
    document.getElementById(`${props.passwordID}`).value = "";
  };

  const changeLoginStatus = useDispatch();

  return (
    <form id={props.formID} onSubmit={clearForm}>
      <div class={props.show}>
        <div class="modal_box">
          <div class="toggle_button">
            <div class="toggleButton" onClick={props.hide}>
              Hide
            </div>
          </div>
          <div class="modal_box_content">
            <div class="header_style">
              <h2 class="modal_interior_header">{props.text}</h2>
            </div>
            <div class="login_one_style">
              <input
                id={props.emailID}
                type="email"
                class="login_one"
                placeholder="Email"
              ></input>
            </div>
            <div class="login_two_style">
              <input
                id={props.passwordID}
                type="password"
                class="login_two"
                placeholder="Password"
              ></input>
            </div>
            <div class="button_center">
              <button class="login_button" id="lin_button">
                {props.function}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};




//to-do:
//In Redux, modify value of loggedIn depending on success of firebase auth method on sign-in/sign-up
