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
  
   

  render() {
    return <div className="tweedShowMaster">
        {}
    </div>;
  }
}

//to-do: access userTweeds col in fb and then --->
//---> relate it to the state of this component for update rendering
//use this page as a guide: https://flaviocopes.com/react-how-to-loop/