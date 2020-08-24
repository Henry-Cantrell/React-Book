import React from "react";

export function FOLLOWER_AND_FOLLOWED_CONTENT_FOR_ALL_USER_INFO(props) {

  return (
    <>
      <div>{`Number of users followed: ${props.followedCount}`}</div>
      <div>{`Number of users following: ${props.followerCount}`}</div>
    </>
  );
}
