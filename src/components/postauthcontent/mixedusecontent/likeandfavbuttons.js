import React from "react";

export let LIKE_AND_FAV_BUTTONS = (props) => {
  return (
    <>
    <div className='likefav-icon-wrapper'>
      {props.likeButton}
      <div className='gap-likefav-icon'/>
      {props.favoriteButton}
    </div>
    </>
  );
};
