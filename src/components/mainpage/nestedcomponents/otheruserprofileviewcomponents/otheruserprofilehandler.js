import React from "react";
import { connect } from "react-redux";
import { OTHER_USER_PROFILE } from "./otheruserprofilepage";
import { joinerForTweedsFromFB } from "./modulesforotheruserprofiles/joinerforprofilehandler";

class OTHER_USER_PROFILE_HANDLER extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.otherUserInfo !== null) {
      joinerForTweedsFromFB(this.props.otherUserInfo.username.uid)
    }
  }

  render() {
    return this.props.otherUserInfo === null ? null : (
      <OTHER_USER_PROFILE
        bio={this.props.otherUserInfo.username.bio}
        joinDate={this.props.otherUserInfo.username.joinDate}
        username={this.props.otherUserInfo.username.username}
        followedCountOtherUser={this.props.otherUserInfo.username.followedCount}
        followerCountOtherUser={this.props.otherUserInfo.username.followerCount}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    otherUserInfo: state.otherUserInfo,
  };
};

export default connect(mapStateToProps)(OTHER_USER_PROFILE_HANDLER);

