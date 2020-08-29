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
      <>
      <div className='div-for-user-avatar-tweed'>
          <img class="img-for-user-avatar-tweed" src={this.state.urlAvatar} />
          <div class="div-for-username">{this.props.username}</div>
          <div class="tweed-text">{this.props.tweedText}</div>
      </div>
      </>
    );
  }
}