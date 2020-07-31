import React from 'react'
import {MODAL_USER_PROFILE_INPUTS} from './modaluserprofileinputs'

export function MODAL_USER_PROFILE(props) {
    return (
      <div class="show_modal">
        <div class="modal_box">
          <div class="toggleButton" onClick={props.hide}>
            Hide
          </div>
          <div class="modalProfileInputs">
            <MODAL_USER_PROFILE_INPUTS />
          </div>
        </div>
      </div>
    );
  }
  