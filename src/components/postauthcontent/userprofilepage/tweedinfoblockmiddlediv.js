import React from "react";
import { FOLLOWER_AND_FOLLOWED_CONTENT } from "./followerandtweedcontent";
import { FOLLOW_BUTTON } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/followbutton";
import {TWEED_COUNT_FOR_USER} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/tweedcountforuserprofiles'

export let TWEED_INFO_BLOCK_MIDDLE_DIV = (props) => {
  <div className="showFollowAndTweedInts">
    <TWEED_COUNT_FOR_USER uid={props.userUid} />
    {props.forOtherUser === undefined ? (
      <FOLLOWER_AND_FOLLOWED_CONTENT />
    ) : (
      <>
        <FOLLOW_BUTTON
          userUid={props.userUid}
          username={props.username}
          uid={props.uid}
        />
        <FOLLOWER_AND_FOLLOWED_CONTENT
          forOtherUser={true}
          followedCountOtherUser={props.followedCountOtherUser}
          followerCountOtherUser={props.followerCountOtherUser}
        />
      </>
    )}
  </div>;
};
