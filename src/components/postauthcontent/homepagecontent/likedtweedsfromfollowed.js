import React from "react";
import { TWEED_DIV_ON_PAGE } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/tweedonpage";
import { connect } from "react-redux";
import { LIKE_BUTTON_HANDLER } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/likebuttonhandler";
import { FAVORITE_BUTTON_HANDLER } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/userfavorites/favbuttonhandler";
import { PROFILE_FROM_LIKEDBY_MESSAGE } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/accessprofilefromlikedbymessage";

function LIKED_TWEEDS_FROM_FOLLOWED(props) {
  let noUndefined = (item) => {
    return item != undefined;
  };

  const testVar = props.likedTweedsFromFollowed.tweedArray.filter(noUndefined);

  const tweedsDisplayFollowedLiked = testVar.length
    ? testVar.map((tweed) => {
        return (
          <TWEED_DIV_ON_PAGE
            tweedText={tweed.tweed}
            username={tweed.username}
            uid={tweed.uid}
            showOtherUserProfile={props.showOtherUserProfile}
            id={tweed.id}
            button={null}
            likeButton={
              <LIKE_BUTTON_HANDLER
                username={props.username}
                userUid={props.userUid}
                uid={tweed.uid}
                id={tweed.id}
                tweed={tweed.tweed}
                usernameTweed={tweed.username}
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
            likedBy={
              <PROFILE_FROM_LIKEDBY_MESSAGE
                showOtherUserProfile={props.showOtherUserProfile}
                usernameOfLiker={tweed.usernameOfLiker}
                uid={tweed.uidOfLiker}
              />
            }
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
