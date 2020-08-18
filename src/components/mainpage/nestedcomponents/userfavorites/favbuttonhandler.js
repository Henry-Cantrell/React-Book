import React from "react";
import { FAVORITE_BUTTON } from "./favbutton";
import { UNFAVORITE_BUTTON } from "./unfavbutton";
import firebase from "firebase";
import { FAVORITE_COUNT_DISPLAY } from "./favcountdisplay";

export class FAVORITE_BUTTON_HANDLER extends React.Component {
  constructor(props) {
    super(props);

    this.toggleFavFalse = this.toggleFavFalse.bind(this);
    this.toggleFavTrue = this.toggleFavTrue.bind(this);

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
            if (doc.id === this.props.uniqueUid) {
              firebase
                .firestore()
                .collection("favoritedTweeds")
                .doc(this.props.uniqueUid)
                .collection("tweedsFavoritedByUser")
                .onSnapshot((snapshot) => {
                  snapshot.forEach((doc) => {
                    if (
                      doc.data().uid === this.props.uid
                    ) {
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

  toggleFavTrue() {
    this.setState({
      favorited: true,
    });
  }

  toggleFavFalse() {
    this.setState({
      favorited: false,
    });
  }

  render() {
    return this.state.favorited ? (
      <UNFAVORITE_BUTTON
        favoriteDisplay={
          <FAVORITE_COUNT_DISPLAY id={this.props.id} uid={this.props.uid} />
        }
        id={this.props.id}
        uid={this.props.uid}
        false={this.toggleFavFalse}
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
        true={this.toggleFavTrue}
      />
    );
  }
}