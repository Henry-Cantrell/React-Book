import React from "react";
import {TWEED_DIV_ON_PAGE} from './tweedDivOnPage'
import {connect} from 'react-redux'
import {LIKE_BUTTON_HANDLER} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/likebuttonhandler'

function LIKED_TWEEDS_FROM_FOLLOWED(props) {

  let noUndefined = (item) => {
    return item != undefined;
  };

  const testVar = props.likedTweedsFromFollowed.tweedArray.filter(
    noUndefined
  );

  const tweedsDisplayFollowedLiked = testVar.length
    ? testVar.map((tweed) => {
                return (
                  <TWEED_DIV_ON_PAGE
                    id={tweed.id}
                    button={null}
                    likeButton={
                      <LIKE_BUTTON_HANDLER
                        uid={tweed.uid}
                        id={tweed.id}
                        tweed={tweed.tweed}
                        usernameTweed={tweed.username}
                        username={props.username}
                        uniqueUid={props.uniqueUid}
                      />
                    }
                    retweedButton={null}
                    tweedText={tweed.tweed}
                    username={tweed.username}
                    likedBy={`This tweed liked by: ${tweed.usernameOfLiker}`}
                    retweetedBy={null}
                  />
                );
              
      })
    : null;

  return <>{tweedsDisplayFollowedLiked}</>;
}

const mapStateToProps = (state) => {
  return {
    likedTweedsFromFollowed: state.likedTweedsFromFollowed,
  };
};

export default connect(mapStateToProps)(LIKED_TWEEDS_FROM_FOLLOWED);
