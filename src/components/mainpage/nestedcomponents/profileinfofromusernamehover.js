import React from "react";
import firebase from "firebase";
import { FOLLOW_BUTTON } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/followbutton";

export class PROFILE_INFO_USERNAME_HOVER extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showProfileInfo: false,
      username: null,
      usernameOfCurrentUser: null,
      bio: null,
      folllowedCount: null,
      followerCount: null,
      uid: null,
    };
  }

  mouseHoverOnDiv = () => {
    this.setState({
      showProfileInfo: true,
    });

    firebase
      .firestore()
      .collection("users")
      .doc(this.props.uid)
      .get()
      .then((doc) =>
        this.setState({
          username: doc.data().username,
          bio: doc.data().bio,
          folllowedCount: doc.data().folllowedCount,
          followerCount: doc.data().followerCount,
          uid: doc.data().uid,
          usernameOfCurrentUser: this.props.username,
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
            this.props.uniqueUid === this.props.uid
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
        </div>
        <div>{this.props.username}</div>
      </>
    );
  }
}