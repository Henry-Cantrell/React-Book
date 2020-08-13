import React from "react";
import firebase from "firebase";

export class LIKE_COUNT_DISPLAY extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likedCount: 0,
    };
  }

  likedCountFromFb = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(props.uid)
      .collection("userTweeds")
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          if (doc.id === props.id) {
            this.setState({
              likedCount: doc.data().likedCount,
            });
          }
        });
      });
  };
  


  render() {
    <p>{this.state.likedCount}</p>;
  }
}
