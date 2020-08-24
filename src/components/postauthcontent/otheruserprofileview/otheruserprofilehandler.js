import React from "react";
import { connect } from "react-redux";
import { OTHER_USER_PROFILE } from "./otheruserprofilepage";
import { otherUserFavTweeds } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otheruserfavoritetweedsnet";
import { clearTweedOtherUserFav } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/clearOtherUserFavs";
import { otherUserPersonalTweeds } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otheruserpersonaltweedsnet";
import { clearTweedOtherUserPersonal } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/clearOtherUserPersonal";
import firebase from "firebase";

//this component depends on lifecycle hooks and should not be converted to a func component

class OTHER_USER_PROFILE_HANDLER extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(clearTweedOtherUserFav());
    this.props.dispatch(clearTweedOtherUserPersonal());
  }

  componentDidUpdate() {
    let dispatchOtherUserPersonalTweeds = () => {
      if (this.props.otherUserInfo !== null) {
        firebase
          .firestore()
          .collection("users")
          .doc(this.props.otherUserInfo.username.uid)
          .collection("userTweeds")
          .get()
          .then((items) => {
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
      }
    };
    let setUserFavoriteTweeds = () => {
      firebase
        .firestore()
        .collection("favoriteTweeds")
        .doc(this.props.otherUserInfo.username.uid)
        .collection("tweedsFavoritedByUser")
        .get()
        .then((items) => {
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
    dispatchOtherUserPersonalTweeds();
    setUserFavoriteTweeds();
  }

  render() {
    return this.props.otherUserInfo === null ? null : (
      <OTHER_USER_PROFILE
        userUid={this.props.userUid}
        username={this.props.username}
        uid={this.props.otherUserInfo.otherUserDataObject.uid}
        bio={this.props.otherUserInfo.otherUserDataObject.bio}
        joinDate={this.props.otherUserInfo.otherUserDataObject.joinDate}
        username={this.props.otherUserInfo.otherUserDataObject.username}
        followedCountOtherUser={this.props.otherUserInfo.otherUserDataObject.followedCount}
        followerCountOtherUser={this.props.otherUserInfo.otherUserDataObject.followerCount}
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