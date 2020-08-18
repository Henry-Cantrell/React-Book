import React from "react";
import firebase from "firebase";
import { useSelector } from "react-redux";

export function UNFAVORITE_BUTTON(props) {
  const uniqueUid = useSelector((state) => state.uidInt);
  
  let unfavoriteTweedInFirebase = () => {
    props.false();

    firebase
        .firestore()
        .collection("favoriteTweeds")
        .doc(uniqueUid)
        .collection("tweedsFavoritedByUser")
        .onSnapshot((snapshot) => {
            snapshot.forEach((doc) => {
                if (doc.id === this.props.id) {
                    firebase
                    .firestore()
                    .collection("favoriteTweeds")
                    .doc(uniqueUid)
                    .collection("tweedsFavoritedByUser")
                    .doc(doc.id)
                    .delete()
                }
            }).then(
               firebase
                .firestore()
                .collection('favoriteCountForUserTweeds')
                .doc(this.props.id)
                .update({
                    favoriteCount: firebase.firestore.FieldValue.increment(-1)
                })
            )
        })
  };

  return (
    <>
      <button onClick={unfavoriteTweedInFirebase}>Unfavorite</button>
      {props.favoriteDisplay}
    </>
  );
}

