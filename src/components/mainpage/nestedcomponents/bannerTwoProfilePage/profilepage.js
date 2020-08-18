import React from "react";
import { TOP_DIV_CONTENT } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/bannerTwoProfilePage/topdivcontent";
import { MIDDLE_DIV_CONTENT } from "./middlediv";
import { BUTTON_BAR } from "./buttonbar";
import { firebase } from "firebase";
import TWEED_PROFILE from "./usertweedlistprofilepage";
import { FAVORITES_PROFILE } from "./userfavoritesforprofilepage";

export class PROFILE_PAGE extends React.Component {
  constructor(props) {
    super(props);

    this.showUserProfileToggle = this.showUserProfileToggle.bind(this);
    this.showUserFavoritesToggle = this.showUserFavoritesToggle.bind(this);
    this.getJoinDateFromFirestore = this.getJoinDateFromFirestore.bind(this);
    this.getUserBioFromFirestore = this.getUserBioFromFirestore.bind(this);

    this.state = {
      showUserProfile: true,
      showUserFavorites: false,
      userBio: null,
      userJoinDate: null,
    };
  }

  getUserBioFromFirestore = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(this.props.uniqueUid)
      .get()
      .then((doc) => {
        this.setState({
          userBio: doc.data().userBio,
        });
      });
  };

  getJoinDateFromFirestore = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(this.props.uniqueUid)
      .get()
      .then((doc) => {
        this.setState({
          userJoinDate: doc.data().joinDate,
        });
      });
  };

  showUserProfileToggle() {
    this.setState({
      showUserProfile: true,
      showUserFavorites: false,
    });
  }

  showUserFavoritesToggle() {
    this.setState({
      showUserProfile: false,
      showUserFavorites: true,
    });
  }

  componentDidMount() {
    this.getJoinDateFromFirestore();
    this.getUserBioFromFirestore();
  }

  render() {
    return (
      <div class="parentDiv">
        <TOP_DIV_CONTENT />
        <MIDDLE_DIV_CONTENT
          joinDate={this.state.userJ}
          userBio={this.state.userBio}
          userName={this.props.usernameFromRedux}
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