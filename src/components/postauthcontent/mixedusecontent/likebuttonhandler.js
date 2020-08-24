import React from "react";
import { LIKE_BUTTON } from "./likebutton";
import { UNLIKE_BUTTON } from "./unlikebutton";
import firebase from "firebase";
import { LIKE_COUNT_DISPLAY } from "./likecountdisplay";

export class LIKE_BUTTON_HANDLER extends React.Component {
  constructor(props) {
    super(props);

    this.toggleLikeFalse = this.toggleLikeFalse.bind(this);
    this.toggleLikeTrue = this.toggleLikeTrue.bind(this);

    this.state = {
      liked: false,
    };
  }

  componentDidMount() {
    
    let checkForExistingLike = () => {
      firebase
        .firestore()
        .collection("likedTweeds")
        .onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            if (doc.id === this.props.uniqueUid) {
              firebase
                .firestore()
                .collection("likedTweeds")
                .doc(this.props.uniqueUid)
                .collection("tweedsLikedByUser")
                .onSnapshot((snapshot) => {
                  snapshot.forEach((doc) => {
                    if (doc.id === this.props.id) {
                      this.toggleLikeTrue();
                    }
                  });
                });
            }
          });
        });
    };
    checkForExistingLike();    
  }

  toggleLikeTrue() {
    this.setState({
      liked: true,
    });
  }

  toggleLikeFalse() {
    this.setState({
      liked: false,
    });
  }

  render() {
    return this.state.liked ? (
      <UNLIKE_BUTTON
        likeDisplay={
          <LIKE_COUNT_DISPLAY id={this.props.id} uid={this.props.uid} />
        }
        id={this.props.id}
        uid={this.props.uid}
        false={this.toggleLikeFalse}
      />
    ) : (
      <LIKE_BUTTON
        likeDisplay={
          <LIKE_COUNT_DISPLAY id={this.props.id} uid={this.props.uid} />
        }
        uid={this.props.uid}
        uniqueUid={this.props.uniqueUid}
        id={this.props.id}
        tweed={this.props.tweed}
        username={this.props.username}
        usernameOfLiker={this.props.usernameOfLiker}
        usernameTweed= {this.props.usernameTweed}
        true={this.toggleLikeTrue}
      />
    );
  }
}
