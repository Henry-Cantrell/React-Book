import React from "react";
import firebase from "firebase";

export class LIKE_BUTTON extends React.Component {
  constructor(props) {
    super(props);

    this.likeCountToFirebase = this.likeCountToFirebase.bind(this);
  }

  likeCountToFirebase = () => {
    this.props.true();

    firebase
      .firestore()
      .collection("likeCountForUserTweeds")
      .doc(this.props.id)
      .update({
        likeCount: firebase.firestore.FieldValue.increment(1),
      })
      .then(
        firebase
          .firestore()
          .collection("likedTweeds")
          .doc(this.props.uniqueUid)
          .set({
            dnd: "dnd",
          })
      )
      .then(
        firebase
          .firestore()
          .collection("likedTweeds")
          .doc(this.props.uniqueUid)
          .collection("tweedsLikedByUser")
          .doc(this.props.id)
          .set({
            tweed: this.props.tweed,
            id: this.props.id,
            username: this.props.username,
            uid: this.props.uid,
          })
      )
      .then(
        firebase
          .firestore()
          .collection("users")
          .doc(this.props.uniqueUid)
          .get()
          .then((doc) => {
            firebase
              .firestore()
              .collection("likedTweeds")
              .doc(this.props.uniqueUid)
              .collection("tweedsLikedByUser")
              .doc(this.props.id)
              .update({
                usernameOfLiker: doc.data().username,
                uidOfLiker: doc.data().uid
              });
          })
      );
  };

  render() {
    return (
      <>
        <button onClick={this.likeCountToFirebase}>Like</button>
        {this.props.likeDisplay}
      </>
    );
  }
}
