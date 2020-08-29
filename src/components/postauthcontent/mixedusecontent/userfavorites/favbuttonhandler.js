import React from "react";
import { FAVORITE_BUTTON } from "./favbutton";
import { UNFAVORITE_BUTTON } from "./unfavbutton";
import firebase from "firebase";
import { FAVORITE_COUNT_DISPLAY } from "./favcountdisplay";

export class FAVORITE_BUTTON_HANDLER extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorited: false,
    };
  }

  componentDidMount() {
    let checkForExistingFavorite = () => {
      firebase
        .firestore()
        .collection("favoriteTweeds")
        .onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            if (doc.id === this.props.userUid) {
              console.log('fbh/24')
              firebase
                .firestore()
                .collection("favoriteTweeds")
                .doc(this.props.userUid)
                .collection("tweedsFavoritedByUser")
                .onSnapshot((snapshot) => {
                  snapshot.forEach((doc) => {
                    if (doc.data().id === this.props.id) {
                      this.toggleFavTrue();
                    }
                  });
                });
            }
          });
        });
    };
    checkForExistingFavorite();
  }

  toggleFavTrue = () => {
    this.setState({
      favorited: true,
    });
  };

  toggleFavFalse = () => {
    this.setState({
      favorited: false,
    });
  };

  render() {
    return this.state.favorited ? (
      <UNFAVORITE_BUTTON
        favoriteDisplay={
          <FAVORITE_COUNT_DISPLAY id={this.props.id} />
        }
        id={this.props.id}
        uid={this.props.uid}
        false={this.toggleFavFalse}
      />
    ) : (
      <FAVORITE_BUTTON
        favoriteDisplay={
          <FAVORITE_COUNT_DISPLAY id={this.props.id} />
        }
        uid={this.props.uid}
        userUid={this.props.userUid}
        id={this.props.id}
        tweed={this.props.tweed}
        username={this.props.username}
        usernameTweed={this.props.usernameTweed}
        true={this.toggleFavTrue}
      />
    );
  }
}