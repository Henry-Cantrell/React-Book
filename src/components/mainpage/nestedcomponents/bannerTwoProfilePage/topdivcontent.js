import React from 'react'
import {useSelector} from 'react-redux'

export function TOP_DIV_CONTENT(props) {
  const username=useSelector((state) => state.userName)
  return (
    <>
      <div class="topBanner">
        <p class="topBannerInteriorPTag">
          {props.reduxHook === undefined ? username : props.userName}
        </p>
        </div>
      <div class="userImage"></div>
    </>
  );
}
