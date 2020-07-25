import React from 'react'

export function Modal_Func (props) {

    return ( 
      <div class={props.show}>
      <div class='modal_box'>
      <div class='toggle_button'>
            <div class='toggleButton' onClick={props.hide}>hide</div>
          </div>
        <div class='modal_box_content'>
          <div class='header_style'>
        <h2 class='modal_interior_header'>{props.text}</h2>
          </div>
        <div class="login_one_style">
      <input id={props.emailID} class='login_one' placeholder='Email'/>
        </div> 
        <div class='login_two_style'>
      <input id={props.passwordID} class='login_two' placeholder='Password'/>
        </div>
        <div class='button_center'>
        <button class='login_button'>{props.function}</button>
        </div>
          </div>
        </div>
      </div> 
    )
  }

//This FC is done for now. No need to make any adjustments.

