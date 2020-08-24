import React from "react";
import { MODAL_USER_PROFILE } from "./modalBackgroundUserProfile";
import { FOLLOWER_AND_FOLLOWED_CONTENT } from "./followerandtweedcontent";
import { FOLLOW_BUTTON } from "./followbutton";
import {TWEED_COUNT_FOR_USER} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/tweedcountforuserprofiles'
import {INFO_BLOCK_MIDDLE_DIV} from './infoblockmiddlediv'

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
        <USER_INFO_BLOCK_MIDDLE_DIV
        username={this.props.username}
        userBio={this.props.userBio}
        joinDate={this.props.joinDate}
        />
        <div class="uidbModalDiv">
          {this.props.disableEdit === undefined ? (
            <button class="uidModalButton" onClick={this.toggleShowTrue}>
              Update profile information
            </button>
          ) : null}
          <div className="showFollowAndTweedInts">
            <TWEED_COUNT_FOR_USER uid={this.props.uidForUser}/>
            {this.props.forOtherUser === undefined ? (
              <FOLLOWER_AND_FOLLOWED_CONTENT />
            ) : (
              <>
              <FOLLOW_BUTTON uniqueUid={this.props.uniqueUid} username={this.props.userName}uid={this.props.uid}/>
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
