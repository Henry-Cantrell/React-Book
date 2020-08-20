import React from "react";
import { connect } from "react-redux";
import { OTHER_USER_PROFILE } from "./otheruserprofilepage";
import {joinerForTweedsFromFB} from './modulesforotheruserprofiles/joinerforprofilehandler'

function OTHER_USER_PROFILE_HANDLER(props) {
  const otherUserInfo = props.otherUserInfo

  console.log(otherUserInfo.username.uid)

  joinerForTweedsFromFB(otherUserInfo.username.uid)

  return (
    <OTHER_USER_PROFILE
      bio={otherUserInfo.username.bio}
      joinDate={otherUserInfo.username.joinDate}
      username={otherUserInfo.username.username}
    />
  );
}

const mapStateToProps = (state) => { 
  return {
    otherUserInfo: state.otherUserInfo
  };
};

export default connect(mapStateToProps)(OTHER_USER_PROFILE_HANDLER);

//to-do: determine why component cannot access redux data store for other user info
