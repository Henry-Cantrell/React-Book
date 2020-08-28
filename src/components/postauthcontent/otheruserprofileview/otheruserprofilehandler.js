import React from "react";
import { connect } from "react-redux";
import { OTHER_USER_PROFILE } from "./otheruserprofilepage";
import { otherUserFavTweeds } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otheruserfavoritetweedsnet";
import { clearTweedOtherUserFav } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/clearOtherUserFavs";
import { otherUserPersonalTweeds } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otheruserpersonaltweedsnet";
import { clearTweedOtherUserPersonal } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/clearOtherUserPersonal";
import firebase from "firebase";

class OTHER_USER_PROFILE_HANDLER extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      uid: null,
      bio: null,
      joinDate: null,
      followedCount: null,
      followerCount: null,
    };
  }

  dispatchOtherUserPersonalTweeds = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(this.props.otherUserUid)
      .collection("userTweeds")
      .get()
      .then((items) => {
        this.props.dispatch(clearTweedOtherUserPersonal());
        items.forEach((tweed) => {
          this.props.dispatch(
            otherUserPersonalTweeds({
              uid: tweed.data().uid,
              id: tweed.id,
              username: tweed.data().username,
              tweed: tweed.data().tweed,
            })
          );
        });
      });
  };

  setUserFavoriteTweeds = () => {
    firebase
      .firestore()
      .collection("favoriteTweeds")
      .doc(this.props.otherUserUid)
      .collection("tweedsFavoritedByUser")
      .get()
      .then((items) => {
        this.props.dispatch(clearTweedOtherUserFav());
        items.forEach((tweed) => {
          this.props.dispatch(
            otherUserFavTweeds({
              uid: tweed.data().uid,
              id: tweed.id,
              username: tweed.data().username,
              tweed: tweed.data().tweed,
            })
          );
        });
      });
  };

  componentDidMount() {
    let retrieveOtherUserTweeds = () => {
      this.setUserFavoriteTweeds();
      this.dispatchOtherUserPersonalTweeds();
    };
    let setOtherUserDataInState = () => {
      firebase
        .firestore()
        .collection("users")
        .doc(this.props.otherUserUid)
        .get()
        .then((doc) => {
          this.setState({
            username: doc.data().username,
            uid: doc.data().uid,
            bio: doc.data().userBio,
            joinDate: doc.data().joinDate,
            followedCount: doc.data().followedCount,
            followerCount: doc.data().followerCount,
          });
        });
    };
    retrieveOtherUserTweeds();
    setOtherUserDataInState();
  }

  render() {
    console.log(this.props.showOtherUserProfileFunc + `ouph/9`)
    return this.state.username === null ? null : (
      <OTHER_USER_PROFILE
        userUid={this.props.userUid}
        username={this.props.username}
        forOtherUser={true}
        uid={this.props.otherUserUid}
        bio={this.state.bio}
        joinDate={this.state.joinDate}
        otherUserUsername={this.state.username}
        followedCountOtherUser={this.state.followedCount}
        followerCountOtherUser={this.state.followerCount}
        showOtherUserProfileFunc={this.props.showOtherUserProfileFunc}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    otherUserInfo: state.otherUserInfo,
  };
};

export default connect(mapStateToProps)(OTHER_USER_PROFILE_HANDLER);
