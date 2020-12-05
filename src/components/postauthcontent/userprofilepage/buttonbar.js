import React from "react";

export function BUTTON_BAR(props) {
  return (
    <div className="button-bar">
      <div
        className="wrapper-for-user-tweeds"
        onClick={props.showUserProfileToggle}
      >
        <div className="show-user-tweeds-div">
          <i class="fas fa-feather-alt"></i>
        </div>
      </div>
      <div
        className="wrapper-for-user-fav"
        onClick={props.showUserFavoritesToggle}
      >
        <div className="show-user-favorites-div">
          <i class="fas fa-bookmark"></i>
        </div>
      </div>
    </div>
  );
}
