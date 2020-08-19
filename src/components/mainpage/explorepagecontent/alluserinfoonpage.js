import React from "react";
import { FOLLOWER_AND_FOLLOWED_CONTENT_FOR_ALL_USER_INFO } from "./followedandfollowerinfoallusers";
import {FOLLOW_BUTTON} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/followbutton';
import { useSelector } from "react-redux";

export function ALL_USER_INFO_ON_PAGE (props) {
  const uniqueUid = useSelector((state) => state.uidInt)

  return (
    <div class="middleDiv">
      <div class="userNameDisplayUidbProfilePage">
        Username: {props.username}
      </div>
      {props.userBio === 'Set up your bio' ? null : <div class="userBioDisplay">{props.userBio}</div>}
      <div class="userJoinDateDisplay">Joined: {props.joinDate}</div>
      <div class="uidbModalDiv">
      <FOLLOW_BUTTON uid={props.uid} uniqueUid={uniqueUid} />
        <div className="showFollowAndTweedInts">
          <FOLLOWER_AND_FOLLOWED_CONTENT_FOR_ALL_USER_INFO
            followedCount={props.followedCount}
            followerCount={props.followerCount}
          />
        </div>
      </div>
    </div>
  );
}

//to-do: implement dynamic onSnapshot-reliant updating of follower/d count
