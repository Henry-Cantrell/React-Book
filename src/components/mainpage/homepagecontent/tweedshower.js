import React from "react";
import firebase from "firebase";
import { TWEED_DIV_ON_PAGE } from "./tweedDivOnPage";

export class TWEED_SHOW extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweeds: [],
    };
  }

  componentDidMount() {
    let getTweedsFromFirebase = () => {
      firebase
        .firestore()
        .collection("users")
        .doc(this.props.uniqueUid)
        .collection("userTweeds")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            this.state.tweeds.push(
              <TWEED_DIV_ON_PAGE tweedText={doc.data().tweed} />
            );
          });
        });
    };

    getTweedsFromFirebase();
    console.log(this.state.tweeds);
  }

  render() {
    return <div className="tweedShowMaster">{this.state.tweeds}</div>;
  }
}

  

//to-do: 
//use redux instead of a stateful component for element storage
//loop and store firebase elements in a component-local array then send to redux
