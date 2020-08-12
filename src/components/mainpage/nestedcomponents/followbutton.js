import React from "react";
import firebase from "firebase";

export class FOLLOW_BUTTON extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      followed: false,
    };
    this.changeFollowedFalse = this.changeFollowedFalse.bind(this);
    this.changeFollowedTrue = this.changeFollowedTrue.bind(this);
  }

  changeFollowedFalse = () => {
    this.setState({
      followed: false,
    });
  };

  changeFollowedTrue = () => {
    this.setState({
      followed: true,
    });
  };

  componentDidMount() {
    let isUserFollowed = () => {
      firebase
        .firestore()
        .collection("users")
        .doc(this.props.uniqueUid)
        .collection("followedUserUids")
        .onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            if (doc.data().uid === this.props.uid) {
              this.changeFollowedTrue();
            } else {
              this.changeFollowedFalse();
            }
          });
        });
    };
    isUserFollowed();
  }

  render() {
    let followUser = () => {
      firebase
        .firestore()
        .collection("users")
        .doc(this.props.uniqueUid)
        .collection("followedUserUids")
        .doc(this.props.uid)
        .set({
          uid: this.props.uid,
        })
        .then(this.changeFollowedTrue());
    };

    let unfollowUser = () => {
      firebase
        .firestore()
        .collection("users")
        .doc(this.props.uniqueUid)
        .collection("followedUserUids")
        .doc(this.props.uid)
        .delete()
        .then(this.changeFollowedFalse());
    };

    return (
      <>
        {this.state.followed ? (
          <button onClick={unfollowUser}>Unfollow</button>
        ) : (
          <button onClick={followUser}>Follow</button>
        )}
      </>
    );
  }
}