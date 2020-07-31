import React from 'react'
import {TOP_DIV_CONTENT} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/bannerTwoProfilePage/topdivcontent'
import {MIDDLE_DIV_CONTENT} from './middlediv'
import {BUTTON_BAR} from './buttonbar'
import {useSelector} from 'react-redux'

export function PROFILE_PAGE() {

    const usernameFromRedux = useSelector((state) => state.userName)

    return (
      <div class="parentDiv">
        <TOP_DIV_CONTENT />
        <MIDDLE_DIV_CONTENT userName={usernameFromRedux}/>
        <BUTTON_BAR />
      </div>
    );
  }
  