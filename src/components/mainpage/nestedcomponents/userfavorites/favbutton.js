import React from "react";
import firebase from "firebase";

export class FAVORITE_BUTTON extends React.Component {
  constructor(props) {
    super(props);

    this.favoriteCountToFirebase = this.favoriteCountToFirebase.bind(this);
  }

  favoriteCountToFirebase = () => {
    this.props.true();
  
    firebase
      .firestore()
      .collection("favoriteCountForUserTweeds")
      .doc(this.props.id)
      .update({
        favoriteCount: firebase.firestore.FieldValue.increment(1),
      })
      .then(
        firebase
          .firestore()
          .collection("favoriteTweeds")
          .doc(this.props.uniqueUid)
          .set({
            dnd: "dnd",
          })
      )
      .then(
        firebase
          .firestore()
          .collection("favoriteTweeds")
          .doc(this.props.uniqueUid)
          .collection("tweedsFavoritedByUser")
          .doc(this.props.id)
          .set({
            tweed: this.props.tweed,
            id: this.props.id,
            username: this.props.username,
            uid: this.props.uid,
          })
      );
  };
  

  render() {
    return (
      <>
        <button onClick={this.favoriteCountToFirebase}>Favorite</button>
        {this.props.favoriteDisplay}
      </>
    );
  }
}
