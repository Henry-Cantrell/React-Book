import React from "react";
import firebase from "firebase";
import { USER_AVATAR } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/useravatar";
import { INFO_BLOCK_FROM_HOVER } from "./InfoBlockFromHover";

export class PROFILE_INFO_USERNAME_HOVER extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showProfileInfo: false,
      username: null,
      usernameOfCurrentUser: this.props.usernameOfCurrentUser,
      bio: null,
      folllowedCount: null,
      followerCount: null,
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
          bio:
            doc.data().userBio === "Set up your bio" ? (
              <></>
            ) : (
              `User bio: ${doc.data().userBio}`
            ),
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

  //wrapper div determines if passed username is equal to current username or if component is for other user page
  //with a ternary operator and does not respond to onMouseEnter event if so

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
            <INFO_BLOCK_FROM_HOVER
              username={this.state.username}
              bio={this.state.bio}
              followedCount={this.state.folllowedCount}
              followerCount={this.state.followerCount}
              uid={this.props.uid}
            />
          ) : null}
          <USER_AVATAR uid={this.state.uid} username={this.state.username} />
        </div>
      </>
    );
  }
}