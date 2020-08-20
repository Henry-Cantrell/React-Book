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
              this.changeFollowedTrue();
            }
          });
        });
    };
    isUserFollowed();
  }

  followUser = () => {
    const increment = firebase.firestore.FieldValue.increment(1);
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
            .doc(doc.id)
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
          .collection("users")
          .doc(this.props.uid)
          .get()
          .then((doc) => {
            firebase
              .firestore()
              .collection("users")
              .doc(this.props.uniqueUid)
              .collection("followedUserUids")
              .doc(this.props.uid)
              .set({
                username: doc.data().username,
              });
          })
      )
      .then(
        firebase
          .firestore()
          .collection("users")
          .doc(this.props.uniqueUid)
          .update({
            followedCount: increment,
          })
      )
      .then(
        firebase.firestore().collection("users").doc(this.props.uid).update({
          followerCount: increment,
        })
      );
  };

  unfollowUser = () => {
    const decrement = firebase.firestore.FieldValue.increment(-1);
    this.changeFollowedFalse();
    firebase
      .firestore()
      .collection("users")
      .doc(this.props.uniqueUid)
      .collection("followedTweeds")
      .get()
      .then(  
        (items) => {
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
                  .collection("users")
                  .doc(this.props.uniqueUid)
                  .collection("followedUserUids")
                  .doc(this.props.uid)
                  .delete()
              )
              .then(
                firebase
                  .firestore()
                  .collection("users")
                  .doc(this.props.uniqueUid)
                  .update({
                    followedCount: decrement,
                  })
              )
              .then(
                firebase
                  .firestore()
                  .collection("users")
                  .doc(this.props.uid)
                  .update({
                    followerCount: decrement,
                  })
              )
              .then(
                firebase
                  .firestore()
                  .collection("likedTweedsOfFollowedUsers")
                  .doc(this.props.uniqueUid)
                  .collection("tweedPool")
                  .get()
                  .then((items) => {
                    items.forEach((docLiked) => {
                      if (
                        docLiked.data().usernameOfLiker === this.props.username
                      ) {
                        firebase
                          .firestore()
                          .collection("likedTweedsOfFollowedUsers")
                          .doc(this.props.uniqueUid)
                          .collection("tweedPool")
                          .doc(docLiked.id)
                          .delete();
                      }
                    });
                  })
              );
          }
        });
      });
  };
  render() {
    return (
      <>
        {this.state.followed ? (
          <button className onClick={this.unfollowUser}>
            Unfollow
          </button>
        ) : (
          <button onClick={this.followUser}>Follow</button>
        )}
      </>
    );
  }
}


//to-do:
//rewrite this from profile placement perspective, over tweed context from original explore page
//place follow/unfollow button into seperate modules and import then display by state toggle