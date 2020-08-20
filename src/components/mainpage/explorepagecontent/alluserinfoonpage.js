import React from "react";
import { FOLLOWER_AND_FOLLOWED_CONTENT_FOR_ALL_USER_INFO } from "./followedandfollowerinfoallusers";
import { FOLLOW_BUTTON } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/followbutton";
import firebase from "firebase";

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
        <div class="userNameDisplayUidbProfilePage">
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
