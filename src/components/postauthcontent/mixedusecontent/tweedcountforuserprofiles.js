import React from "react";
import firebase from "firebase";

export class TWEED_COUNT_FOR_USER extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweedCount: 0,
      userUid: this.props.userUid,
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("users")
      .doc(this.state.userUid)
      .collection("userTweeds")
      .onSnapshot((snapshot) => {
        this.setState({
          tweedCount: snapshot.size,
        });
      });
  }

  render() {
    return <>{`Number of user tweeds: ${this.state.tweedCount}`}</>;
  }
}
