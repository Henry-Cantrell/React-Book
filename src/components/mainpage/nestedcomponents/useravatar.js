import React from "react";
import firebase from "firebase";

export class USER_AVATAR extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      urlAvatar: null,
    };
  }

  componentDidMount() {
    let assignAvatarImageUrl = () => {
      firebase
        .storage()
        .ref(`${this.props.uid}/userAvatar`)
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
      <img className="userAvatarCircle" src={this.state.urlAvatar}></img>
    );
  }
}
