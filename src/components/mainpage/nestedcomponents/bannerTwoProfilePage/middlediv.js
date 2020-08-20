import React from "react";
import { MODAL_USER_PROFILE } from "./modalBackgroundUserProfile";
import { FOLLOWER_AND_FOLLOWED_CONTENT } from "./followerandtweedcontent";
import { FOLLOW_BUTTON } from "../followbutton";

export class MIDDLE_DIV_CONTENT extends React.Component {
  constructor(props) {
    super(props);

    this.toggleShowTrue = this.toggleShowTrue.bind(this);
    this.toggleShowFalse = this.toggleShowFalse.bind(this);

    this.state = {
      show: false,
    };
  }

  toggleShowTrue = () => {
    this.setState({
      show: true,
    });
  };

  toggleShowFalse = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div class="middleDiv">
        <div class="userNameDisplayUidbProfilePage">
          Username: {this.props.userName}
        </div>
        <div class="userBioDisplay">Bio: {this.props.userBio}</div>
        <div class="userJoinDateDisplay">Joined: {this.props.joinDate}</div>
        <div class="uidbModalDiv">
          {this.props.disableEdit === undefined ? (
            <button class="uidModalButton" onClick={this.toggleShowTrue}>
              Update profile information
            </button>
          ) : null}
          <div className="showFollowAndTweedInts">
            {this.props.forOtherUser === undefined ? (
              <FOLLOWER_AND_FOLLOWED_CONTENT />
            ) : (
              <>
              <FOLLOW_BUTTON uniqueUid={this.props.uniqueUid} uid={this.props.uid}/>
              <FOLLOWER_AND_FOLLOWED_CONTENT
                forOtherUser={true}
                followedCountOtherUser={this.props.followedCountOtherUser}
                followerCountOtherUser={this.props.followerCountOtherUser}
              />
              </>
            )}
          </div>
        </div>
        {this.state.show ? (
          <MODAL_USER_PROFILE hide={this.toggleShowFalse} />
        ) : null}
      </div>
    );
  }
}
