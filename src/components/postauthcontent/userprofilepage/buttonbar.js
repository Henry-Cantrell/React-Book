import React from "react";

export function BUTTON_BAR(props) {
  return (
    <div class="buttonBar">
      <button
        style={{ marginTop: 10 + "px" }}
        onClick={props.showUserProfileToggle}
      >
        Show user tweeds
      </button>
      <button
        style={{ marginTop: 10 + "px" }}
        onClick={props.showUserFavoritesToggle}
      >
        Show user favorites
      </button>
    </div>
  );
}
