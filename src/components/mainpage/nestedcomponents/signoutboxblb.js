import React from 'react'
import {toggleBlbSob} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/toggleBlbSob'

export let SIGN_OUT_BOX = (props) => {
    return (
      <div class="sobMaster">
        <div class="sobInteriorTopBox"></div>
        <div class="sobInteriorBottomBox">
          <button onClick={toggleBlbSob} id="sobInteriorSignoutButton">Sign out</button>
        </div>
      </div>
    );
  };
  