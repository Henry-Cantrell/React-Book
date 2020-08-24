import React from "react";
import { FOLLOWER_AND_FOLLOWED_CONTENT_FOR_ALL_USER_INFO } from "./followedandfollowerinfoallusers";
import { FOLLOW_BUTTON } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/followbutton";
import firebase from "firebase";
import { OTHER_USER_INFO_DISPLAY } from "./otheruserinfodisplay";

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
        <OTHER_USER_INFO_DISPLAY
          uid={this.props.uid}
          username={this.props.username}
          userBio={this.props.userBio}
          joinDate={this.props.joinDate}
        />
        <div class="uidbModalDiv">
          <FOLLOW_BUTTON
            uid={this.props.uid}
            userUid={this.props.userUid}
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

