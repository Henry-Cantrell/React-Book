import React from "react";
import firebase from "firebase";

export class FOLLOW_BUTTON extends React.Component {
  constructor(props) {
    super(props);

    this.changeFollowedFalse = this.changeFollowedFalse.bind(this);
    this.changeFollowedTrue = this.changeFollowedTrue.bind(this);
    this.followUser = this.followUser.bind(this);
    this.unfollowUser = this.unfollowUser.bind(this);

    this.state = {
      followed: false,
    };
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
            if (doc.id === this.props.uid) {
              if (doc.data().followStatus === 'followed') {
                this.changeFollowedTrue()
              } else {
                this.changeFollowedFalse()
              }
            };
          });
        });

    };
    isUserFollowed();
  }

  followUser = () => {
    this.changeFollowedTrue();
    firebase
      .firestore()
      .collection("users")
      .doc(this.props.uid)
      .collection("userTweeds")
      .orderBy("created", "asc")
      .get()
      .then((items) => {
        items.forEach((doc) => {
          firebase
            .firestore()
            .collection("users")
            .doc(this.props.uniqueUid)
            .collection("followedTweeds")
            .doc()
            .set({
              tweed: doc.data().tweed,
              username: doc.data().username,
              uid: doc.data().uid,
            });
        });
      })
      .then(
        firebase
          .firestore()
          .collection('users')
          .doc(this.props.uniqueUid)
          .collection('followedUserUids')
          .doc(this.props.uid)
          .set({
            followStatus: 'followed'
          })
      );
  };
  
  unfollowUser = () => {
    this.changeFollowedFalse();
    firebase
      .firestore()
      .collection("users")
      .doc(this.props.uniqueUid)
      .collection("followedTweeds")
      .get()
      .then((items) => {
        items.forEach((doc) => {
          if (doc.data().uid === this.props.uid) {
            firebase
              .firestore()
              .collection("users")
              .doc(this.props.uniqueUid)
              .collection("followedTweeds")
              .doc(doc.id)
              .delete()
              .then(
                firebase
                  .firestore()
                  .collection('users')
                  .doc(this.props.uniqueUid)
                  .collection('followedUserUids')
                  .doc(this.props.uid)
                  .set({
                    followStatus: 'unfollowed'
                  })
              )
          }
        });
      });
  };

  render() {
    return (
      <>
        {this.state.followed ? (
          <button onClick={this.unfollowUser}>Unfollow</button>
        ) : (
          <button onClick={this.followUser}>Follow</button>
        )}
      </>
    );
  }
}

//to-do:
//diagnose why user cannot re-follow and still have tweed display??