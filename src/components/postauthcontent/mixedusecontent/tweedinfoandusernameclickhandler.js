import React from "react";
import firebase from "firebase";
import { eraseAllUserInfo } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/erasealluserinfo";
import { captureForOtherUserInfo } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/captureForOtherUserInfo";
import { otherUserUidClear } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otherUserUidClear";
import { otherUserUidSend } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otherUserUidSend";

export class TWEED_INFO_AND_USERNAME_CLICK_HANDLER extends React.Component {
  constructor(props) {
    super(props);
  }

  handleProfileClick = () => {
    console.log(this.props.uid)
    //this.props.showOtherUserProfileFunc();
    let dispatchReduxActions = () => {
      this.props.dispatch(otherUserUidClear());
      this.props.dispatch(otherUserUidSend(this.props.uid));
    };

    let firebaseCaptureUserInfo = () => {
      firebase
        .firestore()
        .collection("users")
        .doc(this.props.uid)
        .get()
        .then((doc) => {
          this.props.dispatch(eraseAllUserInfo());
          this.props.dispatch(
            captureForOtherUserInfo({
              otherUserDataObject: 0,
              username: doc.data().username,
              uid: doc.data().uid,
              bio: doc.data().userBio,
              joinDate: doc.data().joinDate,
              followedCount: doc.data().followedCount,
              followerCount: doc.data().followerCount,
            })
          );
        });
    };

    dispatchReduxActions();
    firebaseCaptureUserInfo();
  };

  render() {
    console.log(this.props.showOtherUserProfileFunc + `sbc/9`)
    return (
      <div onClick={this.handleProfileClick}>
        <div className="tweedInTweedBox">{this.props.retweetedBy}</div>
        <div className="userNameInTweedBox">
          {`Tweed content: ${this.props.tweedText}`}
        </div>
        {this.props.button}
      </div>
    );
  }
}

