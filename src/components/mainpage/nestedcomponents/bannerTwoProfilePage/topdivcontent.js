import React from "react";
import firebase from "firebase";
import {USER_AVATAR} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/useravatar'

export class TOP_DIV_CONTENT extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      urlBanner: null
    };
  }

  componentDidMount() {
    let assignBannerImageUrl = () => {
      firebase
        .storage()
        .ref(`${this.props.uid}/userBanner`)
        .getDownloadURL()
        .then((url) => {
          this.setState({
            urlBanner: url,
          });
        });
    };
    assignBannerImageUrl();
  }

  render() {
    return (
      <>
        <div class="topBanner">
        <USER_AVATAR uid={this.props.uid}/>
          <div class="topBannerUsernameTag">
            {this.props.forOtherUser === undefined
              ? this.props.username
              : this.props.userName}
          </div>
        </div>
        <img
          class="userImage"
          src={this.state.urlBanner === null ? null : this.state.urlBanner}
        ></img>
      </>
    );
  }
}