import React from "react";
import { TWEED_DIV_ON_PAGE } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/tweedonpage";
import { connect } from "react-redux";
import { DELETE_BUTTON } from "./deletebuttonfortweeds";

export let USER_TWEEDS_ON_PAGE = (props) => {
  let noUndefined = (item) => {
    return item != undefined;
  };

  const testVar = props.userTweeds.tweedArray.filter(noUndefined);

  const tweedsDisplay =
    testVar.length > 0
      ? testVar.map((tweed) => {
          return (
            <TWEED_DIV_ON_PAGE
              forCurrentUser={true}
              id={tweed.id}
              button={<DELETE_BUTTON id={tweed.id} text="Delete this tweed" />}
              tweedText={tweed.tweed}
              username={tweed.username}
              uid={tweed.uid}
            />
          );
        })
      : null;

  return tweedsDisplay;
};

const mapStateToProps = (state) => {
  return {
    userTweeds: state.userTweeds,
  };
};

export default connect(mapStateToProps)(USER_TWEEDS_ON_PAGE);
