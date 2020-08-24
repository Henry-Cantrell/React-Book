import React from "react";

export let TWEED_INFO_BLOCK_MIDDLE_DIV = (props) => {
  <div className="showFollowAndTweedInts">
    <TWEED_COUNT_FOR_USER uid={this.props.uidForUser} />
    {this.props.forOtherUser === undefined ? (
      <FOLLOWER_AND_FOLLOWED_CONTENT />
    ) : (
      <>
        <FOLLOW_BUTTON
          uniqueUid={this.props.uniqueUid}
          username={this.props.userName}
          uid={this.props.uid}
        />
        <FOLLOWER_AND_FOLLOWED_CONTENT
          forOtherUser={true}
          followedCountOtherUser={this.props.followedCountOtherUser}
          followerCountOtherUser={this.props.followerCountOtherUser}
        />
      </>
    )}
  </div>;
};
