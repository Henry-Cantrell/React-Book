import React from "react";
import {TWEED_DIV_ON_PAGE} from './tweedDivOnPage'
import {connect} from 'react-redux'
import {LIKE_BUTTON_HANDLER} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/likebuttonhandler'
import {USERNAME_LIKED_TWEEDS} from './usernameforlikedtweedsfromfollow'

class LIKED_TWEEDS_FROM_FOLLOWED extends React.Component {
  constructor(props){
    super(props)
  }

    render() {
      let noUndefined = (item) => {
        return item != undefined;
      };
  
      const testVar = this.props.likedTweedsFromFollowed.tweedArray.filter(
        noUndefined
      );
   
      const tweedsDisplayFollowedLiked = testVar.length
        ? testVar.map((tweed) => {
            return (
              <TWEED_DIV_ON_PAGE
                id={tweed.id}
                button={null}
                likeButton={<LIKE_BUTTON_HANDLER uid={tweed.uid} id={tweed.id} tweed={tweed.tweed} username={tweed.username} uniqueUid={this.props.uniqueUid}/>}
                retweedButton={null}
                tweedText={tweed.tweed}
                username={`This tweed liked by: ${<USERNAME_LIKED_TWEEDS/>}`}
              />
            );
          })
        : null;
  
      return <>{tweedsDisplayFollowedLiked}</>;
    }
  }
  
const mapStateToProps = (state) => {
  return {
    likedTweedsFromFollowed: state.likedTweedsFromFollowed
  };
};

export default connect(mapStateToProps)(LIKED_TWEEDS_FROM_FOLLOWED);

//broken collection ref somewhere in here~