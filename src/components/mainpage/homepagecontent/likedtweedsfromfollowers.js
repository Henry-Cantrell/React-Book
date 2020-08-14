import React from "react";
import {TWEED_DIV_ON_PAGE} from './tweedDivOnPage'
import {connect} from 'react-redux'
import {LIKE_BUTTON_HANDLER} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/likebuttonhandler'

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
                likeButton={<LIKE_BUTTON_HANDLER id={tweed.id} tweed={tweed.tweed} username={tweed.username} uniqueUid={this.props.uniqueUid} uid={tweed.uid}/>}
                retweedButton={null}
                tweedText={tweed.tweed}
                username={tweed.username}
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