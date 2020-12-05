import React from "react";
import firebase from "firebase";

export let LIKE_BUTTON = (props) => {
  let likeCountToFirebase = () => {
    props.true();

    firebase
      .firestore()
      .collection("likeCountForUserTweeds")
      .doc(props.id)
      .update({
        likeCount: firebase.firestore.FieldValue.increment(1),
      });
  };

  let sendLikedTweedToFirebase = () => {
    firebase
      .firestore()
      .collection("likedTweeds")
      .doc(props.userUid)
      .set({
        dnd: "dnd",
      })
      .then(
        firebase
          .firestore()
          .collection("likedTweeds")
          .doc(props.userUid)
          .collection("tweedsLikedByUser")
          .doc(props.id)
          .set({
            tweed: props.tweed,
            id: props.id,
            username: props.username,
            uid: props.uid,
          })
      )
      .then(
        firebase
          .firestore()
          .collection("users")
          .doc(props.userUid)
          .get()
          .then((doc) => {
            firebase
              .firestore()
              .collection("likedTweeds")
              .doc(props.userUid)
              .collection("tweedsLikedByUser")
              .doc(props.id)
              .update({
                usernameOfLiker: doc.data().username,
                uidOfLiker: doc.data().uid,
              });
          })
      );
  };

  let handleTweedLike = () => {
    likeCountToFirebase();
    sendLikedTweedToFirebase();
  };

  return (
    <>
    <div className='like-icon'>
      <i class="far fa-heart" style={{marginRight: 12 + '%'}} onClick={handleTweedLike}/>
      <div className='like-count'>{props.likeDisplay}</div>
    </div>
    </>
  );
};
