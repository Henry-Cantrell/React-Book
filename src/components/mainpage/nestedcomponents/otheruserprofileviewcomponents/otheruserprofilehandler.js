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
  }

  componentDidMount() {
    this.props.dispatch(clearTweedOtherUserFav());
    this.props.dispatch(clearTweedOtherUserPersonal());
  }

  componentDidUpdate() {
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
        })
        .then(
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
            })
        );
    }
  }

  render() {
    return this.props.otherUserInfo === null ? null : (
      <OTHER_USER_PROFILE
        uniqueUid={this.props.uniqueUid}
        username={this.props.username}
        uid={this.props.otherUserInfo.username.uid}
        bio={this.props.otherUserInfo.username.bio}
        joinDate={this.props.otherUserInfo.username.joinDate}
        username={this.props.otherUserInfo.username.username}
        followedCountOtherUser={this.props.otherUserInfo.username.followedCount}
        followerCountOtherUser={this.props.otherUserInfo.username.followerCount}
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