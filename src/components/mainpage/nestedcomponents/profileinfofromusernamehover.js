import React from "react";
import firebase from "firebase";
import { FOLLOW_BUTTON } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/followbutton";

export class PROFILE_INFO_USERNAME_HOVER extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showProfileInfo: false,
      username: null,
      usernameOfCurrentUser: this.props.username,
      bio: null,
      folllowedCount: null,
      followerCount: null,
      uid: this.props.uid,
    };
  }

  mouseHoverOnDiv = () => {
    this.setState({
      showProfileInfo: true,
    });

    firebase
      .firestore()
      .collection("users")
      .doc(this.state.uid)
      .get()
      .then((doc) =>
        this.setState({
          username: `Username: ${doc.data().username}`,
          bio: doc.data().userBio === 'Set up your bio' ? <></> : `User bio: ${doc.data().userBio}`,
          folllowedCount: `Followed: ${doc.data().followedCount}`,
          followerCount: `Following: ${doc.data().followerCount}`,
        })
      );
  };

  mouseMoveOffDiv = () => {
    this.setState({
      showProfileInfo: false,
    });
  };

  render() {
    return (
      <>
        <div
          onMouseEnter={
            this.props.usernameOfCurrentUser === this.props.username ||
            this.props.forOtherUserProfilePage != undefined
              ? null
              : this.mouseHoverOnDiv
          }
          onMouseLeave={this.mouseMoveOffDiv}
        >
          {this.state.showProfileInfo ? (
            <div className="viewUserProfileInfoFromHover">
              <div>{this.state.username}</div>
              <div>{this.state.bio}</div>
              <div>{this.state.folllowedCount}</div>
              <div>{this.state.followerCount}</div>
              <div>
                {
                  <FOLLOW_BUTTON
                    uniqueUid={this.props.uniqueUid}
                    usernameOfCurrentUser={this.state.username}
                    uid={this.state.uid}
                  />
                }
              </div>
            </div>
          ) : null}
          <div>{this.props.username}</div>
        </div>
      </>
    );
  }
}