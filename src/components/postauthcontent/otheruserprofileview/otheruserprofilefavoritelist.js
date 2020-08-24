import React from "react";
import { TWEED_DIV_ON_PAGE } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/homepagecontent/tweedDivOnPage";
import { connect } from "react-redux";
import { LIKE_BUTTON_HANDLER } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/likebuttonhandler";
import { FAVORITE_BUTTON_HANDLER } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/userfavorites/favbuttonhandler";

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
          uid={tweed.uid}
          retweetedBy={null}
          id={tweed.id}
          tweedText={tweed.tweed}
          likeButton={
            <LIKE_BUTTON_HANDLER
              id={tweed.id}
              tweed={tweed.tweed}
              username={tweed.username}
              uniqueUid={props.uniqueUid}
              uid={tweed.uid}
            />
          }
          retweedButton={
            <FAVORITE_BUTTON_HANDLER
              forOtherUser={true}
              id={tweed.id}
              uid={tweed.uid}
              uniqueUid={props.uniqueUid}
              tweed={tweed.tweed}
              username={props.username}
              usernameTweed={tweed.username}
            />
          }
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

