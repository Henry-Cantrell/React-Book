import React from "react";
import { TWEED_DIV_ON_PAGE } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/homepagecontent/tweedDivOnPage";
import {userFavoriteTweedGetFromFb} from'./userFavTweedsToReduxFromFb'
import { connect } from "react-redux";

export function FAVORITES_PROFILE(props) {
  userFavoriteTweedGetFromFb();

    let noUndefined = (item) => {
      return item != undefined;
    };

    const testVar = this.props.userFavList.tweedArray.filter(noUndefined);

    const tweedsDisplay = testVar.length ? (
      testVar.map((tweed) => {
        return (
            <TWEED_DIV_ON_PAGE
            likedBy={null}
            retweetedBy={null}
            id={tweed.id}
            tweedText={tweed.tweed}
            likeButton={null}
            retweedButton={null}
            button={null}
            username={tweed.username}
          />
        );
      })
    ) : (
      <p>empty!</p>
    );

    return <div className="tweedDisplayList">{tweedsDisplay}</div>;
  
}

const mapStateToProps = (state) => {
  return {
    userFavList: state.userFavList,
}};

export default connect(mapStateToProps)(FAVORITES_PROFILE)
