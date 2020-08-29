import React from "react";

export let LIKE_AND_FAV_BUTTONS = (props) => {
  return (
    <>
    <div className='div-for-like-button'>
      {props.likeButton}
    </div>
    <div className='div-for-fav-button'>
      {props.favoriteButton}
    </div>
    </>
  );
};
