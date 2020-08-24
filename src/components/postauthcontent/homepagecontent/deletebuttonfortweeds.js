import React from "react";
import firebase from "firebase";
import { useSelector } from "react-redux";

export function DELETE_BUTTON(props) {
  const userUid = useSelector((state) => state.userUid);

  let deleteFromUser = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(userUid)
      .collection("userTweeds")
      .doc(props.id)
      .delete()
  };

  let deleteFromLiked = () => {
    firebase
      .firestore()
      .collection("likedTweeds")
      .get()
      .then((items) => {
        items.forEach((docLikedLayerOne) => {
          firebase
            .firestore()
            .collection("likedTweeds")
            .doc(docLikedLayerOne.id)
            .collection("tweedPool")
            .get()
            .then((items) => {
              items.forEach((doc) => {
                if (doc.id === props.id) {
                  firebase
                    .firestore()
                    .collection("likedTweeds")
                    .doc(docLikedLayerOne.id)
                    .collection("tweedPool")
                    .doc(props.id)
                    .delete();
                }
              });
            });
        });
      });
  };

  let deleteFromFavorited = () => {
    firebase
      .firestore()
      .collection("favoriteTweeds")
      .get()
      .then((items) => {
        items.forEach((docFavLayerOne) => {
          firebase
            .firestore()
            .collection("favoriteTweeds")
            .doc(docFavLayerOne.id)
            .collection("tweedsFavoritedByUser")
            .get()
            .then((items) => {
              items.forEach((docFavLayerTwo) => {
                if (docFavLayerTwo.id === props.id) {
                  firebase
                    .firestore()
                    .collection("favoriteTweeds")
                    .doc(docFavLayerOne.id)
                    .collection("tweedsFavoritedByUser")
                    .doc(docFavLayerTwo.id)
                    .delete();
                }
              });
            });
        });
      });
  };

  let deleteFromFollowed = () => {
    firebase
      .firestore()
      .collection("users")
      .get()
      .then((items) => {
        items.forEach((docFollowedTweedsLayerOne) => {
          firebase
            .firestore()
            .collection("users")
            .doc(docFollowedTweedsLayerOne.id)
            .collection("followedTweeds")
            .get()
            .then((items) =>
              items.forEach((docFollowedTweedsLayerTwo) => {
                if (docFollowedTweedsLayerTwo.id === props.id) {
                  firebase
                    .firestore()
                    .collection("users")
                    .doc(docFollowedTweedsLayerOne.id)
                    .collection("followedTweeds")
                    .doc(docFollowedTweedsLayerTwo.id)
                    .delete();
                }
              })
            );
        });
      });
  };

  let deleteJoiner = () => {
    deleteFromUser();
    deleteFromFollowed();
    deleteFromLiked();
    deleteFromFavorited();
  }

  return (
    <>
      <button className="tweedCrudButton" onClick={deleteJoiner}>
        {props.text}
      </button>
    </>
  );
}

