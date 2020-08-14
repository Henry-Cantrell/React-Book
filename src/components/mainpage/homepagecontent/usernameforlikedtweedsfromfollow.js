import React from "react";
import firebase from "firebase";

export class USERNAME_LIKED_TWEEDS extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("users")
      .doc(this.props.uniqueUid)
      .collection("followedUserUids")
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          firebase
            .firestore()
            .collection("users")
            .doc(doc.id)
            .collection("likedTweeds")
            .onSnapshot((snapshot) => {
              snapshot.forEach((doc) => {
                if (doc.data().id === this.props.id) {
                  this.setState({
                    username: doc.data().username,
                  });
                }
              });
            });
        });
      });
  }

  render() {
    return <>{this.state.username}</>;
  }
}
