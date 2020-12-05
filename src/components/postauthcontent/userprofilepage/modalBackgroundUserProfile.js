import React from 'react'
import {MODAL_USER_PROFILE_INPUTS} from './modaluserprofileinputs'
import { useSelector } from 'react-redux';

export function MODAL_USER_PROFILE(props) {
  const userUid = useSelector((state) => state.userUid);

    return (
      <div class="show-modal">
        <div class="modal-box-edit-profile">
          <div class="hide-user-modal-interior" onClick={props.hide}>
          <i class="fas fa-times"></i>
          </div>
          <div class='userProfileModalInterior'>
            <MODAL_USER_PROFILE_INPUTS uniqueUid={userUid}/>
          </div>
        </div>
      </div>
    );
  }
  