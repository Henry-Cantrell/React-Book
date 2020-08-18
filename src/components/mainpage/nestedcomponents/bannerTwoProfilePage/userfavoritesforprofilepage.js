import React from "react";
import { TWEED_DIV_ON_PAGE } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/homepagecontent/tweedDivOnPage";
import { connect, useSelector } from "react-redux";
import { FAVORITE_BUTTON_HANDLER } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/userfavorites/favbuttonhandler";

export function FAVORITES_PROFILE(props) {
  const uniqueUid = useSelector((state) => state.uidInt)
  const username = useSelector((state) => state.userName)

  let noUndefined = (item) => {
    return item != undefined;
  };

  const testVar = props.userFavList.tweedArray.filter(noUndefined);

  const tweedsDisplay = testVar.length ? (
    testVar.map((tweed) => {
      return (
        <TWEED_DIV_ON_PAGE
          likedBy={null}
          retweetedBy={null}
          id={tweed.id}
          tweedText={tweed.tweed}
          likeButton={null}
          retweedButton={
            <FAVORITE_BUTTON_HANDLER
              id={tweed.id}
              uid={tweed.uid}
              uniqueUid={uniqueUid}
              tweed={tweed.tweed}
              username={username}
              usernameTweed={tweed.username}
            />
          }
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
  };
};

export default connect(mapStateToProps)(FAVORITES_PROFILE);