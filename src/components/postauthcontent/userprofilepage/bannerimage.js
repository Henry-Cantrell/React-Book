import React from "react";

export let BANNER_IMAGE = (props) => {
  return (
    <img
      class="userImage"
      src={props.urlBanner === null ? null : props.urlBanner}
    ></img>
  );
};
