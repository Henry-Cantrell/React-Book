import React from 'react'
import firebase from 'firebase'
import {useSelector} from 'react-redux'

export function DELETE_BUTTON(props) {
  const uid = useSelector((state) => state.uidInt);

  let deleteTweed = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .collection("userTweeds")
      .doc(props.id)
      .delete()
      .then(
        firebase
        .firestore()
        .collection("favoriteTweeds")
        .get()
        .then(
          (items) => {
            items.forEach((doc) => {
              firebase
                .firestore()
                .collection("favoriteTweeds")
                .doc(doc.id)
                .collection('tweedsFavoritedByUser')
                .get()
                .then(
                  (items) => {
                    items.forEach((doc) => {
                      if () {
                        firebase
                          .firestore()
                          .collection("favoriteTweeds")
                          .doc(doc.id)
                          .collection('tweedsFavoritedByUser')
                      }
                    })
                  }
                )
            })
          }
        )
      );
  };

  return (
    <>
      <button className="tweedCrudButton" onClick={deleteTweed}>
        {props.text}
      </button>
    </>
  );
}

//also delete tweed out of favorites tweed pool for all users