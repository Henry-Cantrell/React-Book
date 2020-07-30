import React from 'react'

export let SIGN_OUT_BOX = (props) => {

    return (
      <div class="sobMaster" onClick={props.toggleShow}>
        <div class="sobInteriorTopBox"></div>
        <div class="sobInteriorBottomBox">
          <button id="sobInteriorSignoutButton" onClick={props.signOut}>Sign out</button>
        </div>
      </div>
    );
  };
  