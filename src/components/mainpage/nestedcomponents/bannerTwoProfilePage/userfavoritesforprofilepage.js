import React from "react";
import firebase from "firebase";
import { TWEED_DIV_ON_PAGE } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/homepagecontent/tweedDivOnPage";
import { DELETE_BUTTON } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/homepagecontent/deletebuttonfortweeds";

export function FAVORITES_PROFILE(props) {
  let userFavoriteTweedGetFromFb = () => {
    firebase
      .firestore()
      .collection("favoriteTweeds")
      .doc(this.props.uniqueUid)
      .collection("tweedsFavoritedByUser")
      .onSnapshot((snapshot) => {
        snapshot.forEach((tweed) => {
          return (
            <TWEED_DIV_ON_PAGE
              likedBy={null}
              retweetedBy={null}
              id={tweed.id}
              tweedText={tweed.tweed}
              likeButton={null}
              retweedButton={null}
              button={<DELETE_BUTTON id={tweed.id} text="Delete this tweed" />}
              username={tweed.username}
            />
          );
        });
      });
  };

  return <div className="tweedDisplayList">{userFavoriteTweedGetFromFb}</div>;
}
