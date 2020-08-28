import React from "react";
import { TOP_DIV_CONTENT } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/userprofilepage/topdivcontent";
import { MIDDLE_DIV_CONTENT } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/userprofilepage/middlediv";
import { BUTTON_BAR } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/userprofilepage/buttonbar";
import OTHER_USER_TWEEDS_PROFILE from "./otherusertweedlist";
import OTHER_USER_FAVORITES_PROFILE from "./otheruserprofilefavoritelist";

export class OTHER_USER_PROFILE extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showUserProfile: true,
      showUserFavorites: false,
      userBio: this.props.bio,
      joinDate: this.props.joinDate,
      username: this.props.username,
      otherUserUsername: this.props.otherUserUsername,
      followedCountOtherUser: this.props.followedCountOtherUser,
      followerCountOtherUser: this.props.followerCountOtherUser,
    };
  }

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

  render() {
    console.log(this.props.showOtherUserProfileFunc + `oupp`)
    return (
      <div class="parentDiv">
        <TOP_DIV_CONTENT
          uid={this.props.uid}
          forOtherUser={true}
          otherUserUsername={this.state.otherUserUsername}
        />
        <MIDDLE_DIV_CONTENT
          userUid={this.props.forOtherUser === undefined ? this.props.userUid : this.props.uid}
          forOtherUser={true}
          followedCountOtherUser={this.state.followedCountOtherUser}
          followerCountOtherUser={this.state.followerCountOtherUser}
          disableEdit={true}
          joinDate={this.state.joinDate}
          userBio={this.state.userBio}
          username={this.state.otherUserUsername}
        />
        <BUTTON_BAR
          showUserProfileToggle={this.showUserProfileToggle}
          showUserFavoritesToggle={this.showUserFavoritesToggle}
        />
        {this.state.showUserProfile ? (
          <OTHER_USER_TWEEDS_PROFILE
            userUid={this.props.userUid}
            username={this.state.username}
            uid={this.props.uid}
          />
        ) : this.state.showUserFavorites ? (
          <OTHER_USER_FAVORITES_PROFILE
            showOtherUserProfileFunc={this.props.showOtherUserProfileFunc}
            userUid={this.props.userUid}
            username={this.state.username}
            uid={this.props.uid}
          />
        ) : null}
      </div>
    );
  }
}

