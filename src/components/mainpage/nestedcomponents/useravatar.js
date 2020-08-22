import React from "react";
import firebase from "firebase";

export class USER_AVATAR extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      urlAvatar: null,
      uid: this.props.uid,
    };
  }

  componentDidMount() {
    let assignAvatarImageUrl = () => {
      firebase
        .storage()
        .ref(`${this.state.uid}/userAvatar`)
        .getDownloadURL()
        .then((url) => {
          this.setState({
            urlAvatar: url,
          });
        });
    };

    assignAvatarImageUrl();
  }

  render() {
    return (
      <div className="grid-container-avatar">
        <img className="userAvatarCircle" src={this.state.urlAvatar}></img>
        <div className="username-inside-avatar">{this.props.username}</div>
      </div>
    );
  }
}
