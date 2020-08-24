import React from "react";

export let FIRST_BANNER_CONTENT = (props) => {
  <div class="first">
    <div class="bannerFlowControlButtons">
      <button onClick={props.showHomePage}>Home page</button>
      <button onClick={props.showProfilePage}>Profile page</button>
      <button onClick={props.showExplorePage}>Explore page</button>
    </div>
  </div>
};
