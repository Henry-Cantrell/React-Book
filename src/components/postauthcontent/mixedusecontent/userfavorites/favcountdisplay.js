import React from "react";
import firebase from "firebase";

export class FAVORITE_COUNT_DISPLAY extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteCount: 0,
    };
  }

  componentDidMount() {
    let favoriteCountFromFb = () => {
      firebase
        .firestore()
        .collection("favoriteCountForUserTweeds")
        .onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            if (doc.id === this.props.id) {
              this.setState({
                favoriteCount: doc.data().favoriteCount,
              });
            }
          });
        });
    };
    favoriteCountFromFb();
  }

  render() {
    return <div>{this.state.favoriteCount}</div>;
  }
}

