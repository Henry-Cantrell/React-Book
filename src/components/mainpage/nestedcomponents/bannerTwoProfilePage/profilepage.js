import React from "react";
import { TOP_DIV_CONTENT } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/bannerTwoProfilePage/topdivcontent";
import { MIDDLE_DIV_CONTENT } from "./middlediv";
import { BUTTON_BAR } from "./buttonbar";
import { fireBaseExternalObj } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/firebasedeps.js";
import { userBioSend } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/userBioSend";
import { userJoinDateNet } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/userJoinDateNet";
import TWEED_PROFILE from "./usertweedlistprofilepage";
import { FAVORITES_PROFILE } from "./userfavoritesforprofilepage";

export class PROFILE_PAGE extends React.Component {
  constructor(props) {
    super(props);

    this.showUserProfile = this.showUserProfile.bind(this);
    this.showUserFavorites = this.showUserFavorites.bind(this);

    this.state = {
      showUserProfile: true,
      showUserFavorites: false,
    };
  }

  componentDidMount() {
    let getUserBioFromFirestore = () => {
      const docRef = fireBaseExternalObj.dataBase
        .collection("users")
        .doc(this.props.uniqueUid);

      docRef.get().then(function (doc) {
        if (doc.exists) {
            this.props.dispatch(userBioSend(doc.data().userBio));
        }
      });
    };

    let getJoinDateFromFirestore = () => {
      const docRef = fireBaseExternalObj.dataBase
        .collection("users")
        .doc(this.props.uniqueUid);

      docRef.get().then(function (doc) {
        if (doc.exists) {
            this.props.dispatch(userJoinDateNet(doc.data().joinDate));
        }
      });
    };

    getJoinDateFromFirestore();
    getUserBioFromFirestore();
  }

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

  render() {
    return (
      <div class="parentDiv">
        <TOP_DIV_CONTENT />
        <MIDDLE_DIV_CONTENT
          joinDate={this.props.joinDateFromRedux}
          userBio={this.props.userBioFromRedux}
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