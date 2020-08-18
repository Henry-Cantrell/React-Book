import React from "react";
import { FAVORITE_BUTTON } from "./favbutton";
import { UNFAVORITE_BUTTON } from "./unfavbutton";
import firebase from "firebase";
import { FAVORITE_COUNT_DISPLAY } from "./favcountdisplay";

export class FAVORITE_BUTTON_HANDLER extends React.Component {
  constructor(props) {
    super(props);

    this.toggleLikeFalse = this.toggleLikeFalse.bind(this);
    this.toggleLikeTrue = this.toggleLikeTrue.bind(this);

    this.state = {
      liked: false,
    };
  }

  componentDidMount() {
    let checkForExistingFavorite = () => {
      firebase
        .firestore()
        .collection("favoriteTweeds")
        .onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            if (doc.id === this.props.uniqueUid) {
              firebase
                .firestore()
                .collection("favoritedTweeds")
                .doc(doc.id)
                .collection("tweedsFavoritedByUser")
                .onSnapshot((snapshot) => {
                  snapshot.forEach((doc) => {
                    if (
                      doc.data().usernameOfFavoriter === this.props.username
                    ) {
                      this.toggleLikeTrue();
                    }
                  });
                });
            }
          });
        });
    };
    checkForExistingFavorite();
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
      <UNFAVORITE_BUTTON
        favoriteDisplay={
          <FAVORITE_COUNT_DISPLAY id={this.props.id} uid={this.props.uid} />
        }
        id={this.props.id}
        uid={this.props.uid}
        false={this.toggleLikeFalse}
      />
    ) : (
      <FAVORITE_BUTTON
        favoriteDisplay={
          <FAVORITE_COUNT_DISPLAY id={this.props.id} uid={this.props.uid} />
        }
        uid={this.props.uid}
        uniqueUid={this.props.uniqueUid}
        id={this.props.id}
        tweed={this.props.tweed}
        username={this.props.username}
        usernameOfFavoriter={null}
        usernameTweed={this.props.usernameTweed}
        true={this.toggleLikeTrue}
      />
    );
  }
}