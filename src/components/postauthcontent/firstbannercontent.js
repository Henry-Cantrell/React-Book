import React from "react";
import { toggleOtherUserProfileOff } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/postAuthContentActions/otherUserProfileOff";
import { allOffExceptExplore } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/postAuthContentActions/allOffExceptExplore";
import { allOffExceptHome } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/postAuthContentActions/allOffExceptHome";
import { allOffExceptProfile } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/postAuthContentActions/allOffExceptProfile";
import { exploreToggleOn } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/postAuthContentActions/exploreToggleOn";
import { homepageToggleOn } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/postAuthContentActions/homepageToggleOn";
import { profileToggleOn } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/postAuthContentActions/profileToggleOn";
import { useDispatch } from "react-redux";
import { otherUserProfileFavToggle } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otherUserProfileFavToggle";

export let FIRST_BANNER_CONTENT = (props) => {
  const dispatch = useDispatch();

  let showHomePage = () => {
    dispatch(otherUserProfileFavToggle("OFF"));
    dispatch(allOffExceptHome());
    dispatch(homepageToggleOn());
    dispatch(toggleOtherUserProfileOff());
  };

  let showProfilePage = () => {
    dispatch(otherUserProfileFavToggle("OFF"));
    dispatch(allOffExceptProfile());
    dispatch(profileToggleOn());
    dispatch(toggleOtherUserProfileOff());
  };

  let showExplorePage = () => {
    dispatch(otherUserProfileFavToggle("OFF"));
    dispatch(allOffExceptExplore());
    dispatch(exploreToggleOn());
    dispatch(toggleOtherUserProfileOff());
  };

  return (
    <div class="first">
      <div className="first-banner-content-button-wrapper">
          <button className="first-banner-flow-button" onClick={showHomePage}>
            Home page
          </button>
          <button className="first-banner-flow-button" onClick={showProfilePage}>
            Profile page
          </button>
          <button className="first-banner-flow-button" onClick={showExplorePage}>
            Explore page
          </button>
        </div>
      </div>
  );
};
