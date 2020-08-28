import React from "react";
import { TWEED_DIV_ON_PAGE } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/tweedonpage";
import { connect } from "react-redux";
import { LIKE_BUTTON_HANDLER } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/likebuttonhandler";
import { FAVORITE_BUTTON_HANDLER } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/userfavorites/favbuttonhandler";

function FOLLOWER_TWEEDS_ON_HOMEPAGE(props) {

  let noUndefined = (item) => {
    return item != undefined;
  };

  const testVar = props.followedTweeds.tweedArray.filter(noUndefined);

  const tweedsDisplayFollowers = testVar.length
    ? testVar.map((tweed) => {
        return (
          <TWEED_DIV_ON_PAGE
            tweedText={tweed.tweed}
            username={tweed.username}
            uid={tweed.uid}
            id={tweed.id}
            button={null}
            likeButton={
              <LIKE_BUTTON_HANDLER
                id={tweed.id}
                tweed={tweed.tweed}
                username={tweed.username}
                userUid={props.userUid}
                uid={tweed.uid}
              />
            }
            favoriteButton={
              <FAVORITE_BUTTON_HANDLER
                id={tweed.id}
                uid={tweed.uid}
                userUid={props.userUid}
                tweed={tweed.tweed}
                username={props.username}
                usernameTweed={tweed.username}
              />
            }
          />
        );
      })
    : null;

  return <>{tweedsDisplayFollowers}</>;
}

const mapStateToProps = (state) => {
  return {
    followedTweeds: state.followedTweeds,
  };
};

export default connect(mapStateToProps)(FOLLOWER_TWEEDS_ON_HOMEPAGE);
