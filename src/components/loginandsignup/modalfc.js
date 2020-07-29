import React from 'react'

export let MODAL_FUNC = (props) => {

  return (
    <form id={props.formID}>
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
                type="text"
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
              <div class='login_three_style'>
                {props.nameInputOption}
              </div>
            </div>
            <div class="button_center">
              <button class="login_button" id="lin_button">
                {props.function}
              </button>
            </div>
          </div>
        </div>
    </form>
  );
};




//to-do:
//In Redux, modify value of loggedIn depending on success of firebase auth method on sign-in/sign-up
