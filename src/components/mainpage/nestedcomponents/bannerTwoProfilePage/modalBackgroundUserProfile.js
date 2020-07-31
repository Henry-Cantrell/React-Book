import React from 'react'
import {MODAL_USER_PROFILE_INPUTS} from './modaluserprofileinputs'

export function MODAL_USER_PROFILE(props) {
    return (
      <div class="show_modal">
        <div class="modal_box_userprofile">
          <div class="toggleButton" onClick={props.hide}>
            Hide
          </div>
          <div class='userProfileModalInterior'>
            <MODAL_USER_PROFILE_INPUTS />
          </div>
        </div>
      </div>
    );
  }
  