import React from 'react'
import {useSelector} from 'react-redux'

export function TOP_DIV_CONTENT() {
  return (
    <>
      <div class="topBanner">
  <p class="topBannerInteriorPTag">{useSelector((state) => state.userName)}</p>
  <div class='userImage'></div>
      </div>
    </>
  );
}
