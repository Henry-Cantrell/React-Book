import React from "react";

export let LIKE_AND_FAV_BUTTONS = () => {
  return (
    <div className="elevateLikeAndFav">
      {props.likeButton}
      {props.favoriteButton}
    </div>
  );
};
