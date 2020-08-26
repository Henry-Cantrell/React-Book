import React from "react";
import firebase from "firebase";
import { PLACE_UNFOLLOW_BUTTON } from "./PlaceUnfollowButton";
import { PLACE_FOLLOW_BUTTON } from "./PlaceFollowButton";

export class FOLLOW_BUTTON extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      followed: false,
    };
  }

  componentDidMount() {
    let isUserFollowed = () => {
      firebase
        .firestore()
        .collection("users")
        .doc(this.props.userUid)
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


  render() {
    return (
      <>
        {this.state.followed ? (
          <PLACE_UNFOLLOW_BUTTON
            uid={this.props.uid}
            userUid={this.props.userUid}
            changeFollowedFalse={this.changeFollowedFalse}
          />
        ) : (
          <PLACE_FOLLOW_BUTTON
            uid={this.props.uid}
            userUid={this.props.userUid}
            changeFollowedTrue={this.changeFollowedTrue}
          />
        )}
      </>
    );
  }
}
