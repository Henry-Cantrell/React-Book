import React from "react";
import { FOLLOWER_AND_FOLLOWED_CONTENT_FOR_ALL_USER_INFO } from "./followedandfollowerinfoallusers";
import { FOLLOW_BUTTON } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/followbutton";
import firebase from "firebase";
import { USER_AVATAR } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/useravatar";

export class ALL_USER_INFO_ON_PAGE extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      followedCount: null,
      followerCount: null,
      uid: this.props.uid,
    };
  }

  componentDidMount() {
    let followedCountUpdate = () => {
      firebase
        .firestore()
        .collection("users")
        .doc(this.state.uid)
        .onSnapshot((doc) => {
          this.setState({
            followedCount: doc.data().followedCount,
            followerCount: doc.data().followerCount,
          });
        });
    };
    followedCountUpdate();
  }

  render() {
    return (
      <div class="middleDiv">
        <div className='holderForAvatarOnExplore'>
        <USER_AVATAR uid={this.props.uid}/>
        </div>
        <div class="userNameDisplayUidbProfilePageAuioop">
          Username: {this.props.username}
        </div>
        {this.props.userBio === "Set up your bio" ? null : (
          <div class="userBioDisplay">{this.props.userBio}</div>
        )}
        <div class="userJoinDateDisplay">Joined: {this.props.joinDate}</div>
        <div class="uidbModalDiv">
          <FOLLOW_BUTTON
            uid={this.props.uid}
            uniqueUid={this.props.uniqueUid}
            username={this.props.username}
          />
          <div className="showFollowAndTweedInts">
            <FOLLOWER_AND_FOLLOWED_CONTENT_FOR_ALL_USER_INFO
              followedCount={this.state.followedCount}
              followerCount={this.state.followerCount}
            />
          </div>
        </div>
      </div>
    );
  }
}

//consider crafting custom component for 
//explore page user profile displays to accomodate avatars