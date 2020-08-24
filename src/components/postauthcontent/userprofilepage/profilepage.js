import React from "react";
import { TOP_DIV_CONTENT } from "./topdivcontent";
import { MIDDLE_DIV_CONTENT } from "./middlediv";
import { BUTTON_BAR } from "./buttonbar";
import firebase from "firebase";
import TWEED_PROFILE from "./usertweedlistprofilepage";
import FAVORITES_PROFILE from "./userfavoritesforprofilepage";

export class PROFILE_PAGE extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showUserProfile: true,
      showUserFavorites: false,
      userBio: null,
      joinDate: null,
      username: null,
      userUid: null,
    };
  }

  getUserInfoFromFirestore = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(this.props.userUid)
      .get()
      .then((doc) => {
        this.setState({
          userBio: doc.data().userBio,
          username: doc.data().username,
          joinDate: doc.data().joinDate,
          userUid: doc.data().uniqueUid
        });
      });
  };

  showUserProfileToggle = () => {
    this.setState({
      showUserProfile: true,
      showUserFavorites: false,
    });
  };

  showUserFavoritesToggle = () => {
    this.setState({
      showUserProfile: false,
      showUserFavorites: true,
    });
  };

  componentDidMount() {
    this.getUserInfoFromFirestore();
  }

  render() {
    return (
      <div class="parentDiv">
        <TOP_DIV_CONTENT
          uid={this.state.userUid}
          username={this.state.username}
        />
        <MIDDLE_DIV_CONTENT
          userUid={this.state.userUid}
          joinDate={this.state.userJoinDate}
          userBio={this.state.userBio}
          username={this.state.username}
        />
        <BUTTON_BAR
          showUserProfileToggle={this.showUserProfileToggle}
          showUserFavoritesToggle={this.showUserFavoritesToggle}
        />
        {this.state.showUserProfile ? (
          <TWEED_PROFILE />
        ) : this.state.showUserFavorites ? (
          <FAVORITES_PROFILE />
        ) : null}
      </div>
    );
  }
}