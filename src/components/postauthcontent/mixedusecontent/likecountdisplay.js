import React from "react";
import firebase from "firebase";

export class LIKE_COUNT_DISPLAY extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likedCount: 0,
    };
  }

  componentDidMount() {
    let likedCountFromFb = () => {
      firebase
        .firestore()
        .collection("likeCountForUserTweeds")
        .onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            if (doc.id === this.props.id) {
              this.setState({
                likedCount: doc.data().likeCount,
              });
            }
          });
        });
    };
    likedCountFromFb();
  }

  render() {
    return (
      <>
        <div className="like-count-int">{this.state.likedCount}</div>
        <div></div>
      </>
    );
  }
}