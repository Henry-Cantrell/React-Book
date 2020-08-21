import React from "react";
import { TOP_DIV_CONTENT } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/bannerTwoProfilePage/topdivcontent";
import { MIDDLE_DIV_CONTENT } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/bannerTwoProfilePage/middlediv";
import { BUTTON_BAR } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/bannerTwoProfilePage/buttonbar";
import OTHER_USER_TWEEDS_PROFILE from "./otherusertweedlist";
import OTHER_USER_FAVORITES_PROFILE from "./otheruserprofilefavoritelist";
import {FOLLOW_BUTTON} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/followbutton'

export class OTHER_USER_PROFILE extends React.Component {
  constructor(props) {
    super(props);

    this.showUserProfileToggle = this.showUserProfileToggle.bind(this);
    this.showUserFavoritesToggle = this.showUserFavoritesToggle.bind(this);

    this.state = {
      showUserProfile: true,
      showUserFavorites: false,
      userBio: this.props.bio,
      userJoinDate: this.props.joinDate,
      username: this.props.username,
      followedCountOtherUser: this.props.followedCountOtherUser,
      followerCountOtherUser: this.props.followerCountOtherUser
    };
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
        <TOP_DIV_CONTENT forOtherUser={true} userName={this.state.username} />
        <MIDDLE_DIV_CONTENT
          uniqueUid={this.props.uniqueUid}
          uidForUser={this.props.uid}
          uid={this.props.uid}
          forOtherUser={true}
          followedCountOtherUser={this.state.followedCountOtherUser}
          followerCountOtherUser={this.state.followerCountOtherUser}
          disableEdit={true}
          joinDate={this.state.userJoinDate}
          userBio={this.state.userBio}
          userName={this.state.username}
        />
        <BUTTON_BAR
          showUserProfileToggle={this.showUserProfileToggle}
          showUserFavoritesToggle={this.showUserFavoritesToggle}
        />
        {this.state.showUserProfile ? (
          <OTHER_USER_TWEEDS_PROFILE uniqueUid={this.props.uniqueUid} username={this.state.username} uid={this.props.uid} />
        ) : this.state.showUserFavorites ? (
          <OTHER_USER_FAVORITES_PROFILE uniqueUid={this.props.uniqueUid} username={this.state.username} uid={this.props.uid} />
        ) : null}
      </div>
    );
  }
}