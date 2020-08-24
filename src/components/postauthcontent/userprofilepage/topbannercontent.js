import React from "react";
import {USER_AVATAR} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/useravatar'

export let TOP_BANNER_CONTENT = (props) => {
  return (
    <div class="topBanner">
      <USER_AVATAR 
      uid={props.uid}
      username={props.username}
      />
      <div class="topBannerUsernameTag">
        {props.forOtherUser === undefined
          ? props.currentUserUsername
          : props.otherUserUsername}
      </div>
    </div>
  );
};
