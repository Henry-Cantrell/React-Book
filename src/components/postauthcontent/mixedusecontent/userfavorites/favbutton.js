import React from "react";
import firebase from "firebase";

export let FAVORITE_BUTTON = (props) => {
  let handleFavoriteAction = () => {
    let favoriteCountUpdate = () => {
      props.true();

      firebase
        .firestore()
        .collection("favoriteCountForUserTweeds")
        .doc(props.id)
        .update({
          favoriteCount: firebase.firestore.FieldValue.increment(1),
        });
    };

    let placeFavoriteTweedInFb = () => {
      firebase
        .firestore()
        .collection("favoriteTweeds")
        .doc(props.userUid)
        .set({
          dnd: "dnd",
        })
        .then(
          firebase
            .firestore()
            .collection("favoriteTweeds")
            .doc(props.userUid)
            .collection("tweedsFavoritedByUser")
            .doc(props.id)
            .set({
              tweed: props.tweed,
              id: props.id,
              username: props.usernameTweed,
              uid: props.uid,
            })
        );
    };
    favoriteCountUpdate();
    placeFavoriteTweedInFb();
  };

  return (
    <>
    <div onClick={handleFavoriteAction} className="fav-button-div">
      <div class="fav-button-div-inner-text">Favorite</div>
      <div class='fav-count'>{props.favoriteDisplay}</div> 
    </div>
    </>
  );
};
