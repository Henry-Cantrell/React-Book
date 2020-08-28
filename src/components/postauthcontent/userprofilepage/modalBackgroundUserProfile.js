import React from 'react'
import {MODAL_USER_PROFILE_INPUTS} from './modaluserprofileinputs'
import { useSelector } from 'react-redux';

export function MODAL_USER_PROFILE(props) {
    const uniqueUid = useSelector((state) => state.uidInt)

    return (
      <div class="show-modal">
        <div class="modal_box_userprofile">
          <div class="toggleButton" onClick={props.hide}>
            Hide
          </div>
          <div class='userProfileModalInterior'>
            <MODAL_USER_PROFILE_INPUTS uniqueUid={uniqueUid}/>
          </div>
        </div>
      </div>
    );
  }
  