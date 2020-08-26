import React from "react";
import { FOLLOW_BUTTON } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/followbutton";
import { useSelector } from "react-redux";

export function INFO_BLOCK_FROM_HOVER(props) {
  const userUid = useSelector((state) => state.userUid);

  return (
    <div className="viewUserProfileInfoFromHover">
      <div>{props.username}</div>
      <div>{props.bio}</div>
      <div>{props.folllowedCount}</div>
      <div>{props.followerCount}</div>
      <div>
        {
          <FOLLOW_BUTTON
            username={props.username}
            userUid={userUid}
            usernameOfCurrentUser={props.usernameOfCurrentUser}
            uid={props.uid}
          />
        }
      </div>
    </div>
  );
}
