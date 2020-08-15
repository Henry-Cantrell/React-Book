import React from "react";
import {TWEED_DIV_ON_PAGE} from './tweedDivOnPage'
import {connect} from 'react-redux'
import {LIKE_BUTTON_HANDLER} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/likebuttonhandler'
import firebase from 'firebase'
import { sendLikedTweedsFromFollowed } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendlikedtweedsfromfollowed";
import {useDispatch} from 'react-redux'

function LIKED_TWEEDS_FROM_FOLLOWED(props) {
  const dispatch = useDispatch();

  let filterTweedArrayForFollowedUids = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(props.uniqueUid)
      .collection("followedUserUids")
      .onSnapshot((snapshot) => {
        snapshot.forEach((docInFollowed) => {
          firebase
            .firestore()
            .collection("likedTweeds")
            .doc(docInFollowed.id)
            .collection("tweedsLikedByUser")
            .onSnapshot((snapshot) => {
              snapshot.forEach((docLikedTweed) => {
                if (docLikedTweed.data().uid != docInFollowed.id) {
                  dispatch(
                    sendLikedTweedsFromFollowed({
                      usernameOfLiker: docLikedTweed.data().usernameOfLiker,
                      tweed: docLikedTweed.data().tweed,
                      username: docLikedTweed.data().username,
                      id: docLikedTweed.id,
                      uid: docLikedTweed.data().uid,
                    })
                  );
                }
              });
            });
        });
      });
  };
  

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

  filterTweedArrayForFollowedUids();

  return <>{tweedsDisplayFollowedLiked}</>;
}

const mapStateToProps = (state) => {
  return {
    likedTweedsFromFollowed: state.likedTweedsFromFollowed,
  };
};

export default connect(mapStateToProps)(LIKED_TWEEDS_FROM_FOLLOWED);

//stuck in loop for redux store transfer???