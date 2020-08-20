import React from "react";
import { TWEED_DIV_ON_PAGE } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/homepagecontent/tweedDivOnPage";
import { connect } from "react-redux";
//import { FAVORITE_BUTTON_HANDLER } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/userfavorites/favbuttonhandler";

export function OTHER_USER_FAVORITES_PROFILE(props) {

  let noUndefined = (item) => {
    return item != undefined;
  };

  const testVar = props.otherUserFavoriteTweeds.tweedArray.filter(noUndefined);

  const tweedsDisplay = testVar.length ? (
    testVar.map((tweed) => {
      return (
        <TWEED_DIV_ON_PAGE
          showOtherUserProfile={null}
          likedBy={null}
          retweetedBy={null}
          id={tweed.id}
          tweedText={tweed.tweed}
          likeButton={null}
          retweedButton={null}
          button={null}
          username={tweed.username}
        />
      );
    })
  ) : (
    <p>empty!</p>
  );

  return <div className="tweedDisplayList">{tweedsDisplay}</div>;
}

const mapStateToProps = (state) => {
  return {
    otherUserFavoriteTweeds: state.otherUserFavoriteTweeds,
  };
};

export default connect(mapStateToProps)(OTHER_USER_FAVORITES_PROFILE);

