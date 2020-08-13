import React from "react";
import { HEADER_BAR_HOME_PAGE } from "./headerbarhomepage";
import { TWEED_BOX_FORM } from "./tweedboxform";
import { TWEED_DIV_ON_PAGE } from "./tweedDivOnPage";
import { connect, useSelector } from "react-redux";
import {DELETE_BUTTON} from './deletebuttonfortweeds'
import FOLLOWER_TWEEDS_ON_HOMEPAGE from './followertweedsonhomepage'

class HOME_PAGE extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    let noUndefined = (item) => {
      return item != undefined;
    };  

    const testVar = this.props.userTweeds.tweedArray.filter(noUndefined);

    const tweedsDisplay = testVar.length ? (
      testVar.map((tweed) => {
        return (
          <TWEED_DIV_ON_PAGE
            id={tweed.id}
            button={<DELETE_BUTTON id={tweed.id} text="Delete this tweed" />}
            likeButton={null}
            retweedButton={null}
            tweedText={tweed.tweed}
            username={tweed.username}
          />
        );
      })
    ) : (
      null
    );

    return (
      <div class="homePageContainer">
        <HEADER_BAR_HOME_PAGE />
        <TWEED_BOX_FORM />
        <div className="borderBlock"></div>
        <div className="tweedDisplayList">
          {tweedsDisplay} <FOLLOWER_TWEEDS_ON_HOMEPAGE dispatch={this.props.dispatch} uniqueUid={this.props.uniqueUid}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userTweeds: state.userTweeds,
  };
}
  
export default connect(mapStateToProps)(HOME_PAGE);

  //to-do:
  //delete uid in uid follower collection in firebase on unfollow
  //make this work!


