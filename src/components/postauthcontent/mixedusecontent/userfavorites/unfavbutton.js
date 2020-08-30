import React from "react";
import firebase from "firebase";
import { useSelector } from "react-redux";

export function UNFAVORITE_BUTTON(props) {
  const userUid = useSelector((state) => state.userUid);

  let handleUnfavoriteAction = () => {
    let decrementFavCount = () => {
      props.false();

      firebase
        .firestore()
        .collection("favoriteCountForUserTweeds")
        .doc(props.id)
        .update({
          favoriteCount: firebase.firestore.FieldValue.increment(-1),
        });
    };

    let deleteUnfavoritedTweed = () => {
      firebase
        .firestore()
        .collection("favoriteTweeds")
        .doc(userUid)
        .collection("tweedsFavoritedByUser")
        .onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            if (doc.id === props.id) {
              firebase
                .firestore()
                .collection("favoriteTweeds")
                .doc(userUid)
                .collection("tweedsFavoritedByUser")
                .doc(doc.id)
                .delete();
            }
          });
        });
    };
    decrementFavCount();
    deleteUnfavoritedTweed();
  };
  return (
    <>
    <div class='fav-icon'>
      <i class="fas fa-bookmark" onClick={handleUnfavoriteAction} />
      <div class="fav-count">{props.favoriteDisplay}</div>
    </div>
    </>
  );
}
