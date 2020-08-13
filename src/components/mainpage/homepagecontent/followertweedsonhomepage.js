import React from "react";
import {TWEED_DIV_ON_PAGE} from './tweedDivOnPage'
import {connect} from 'react-redux'

class FOLLOWER_TWEEDS_ON_HOMEPAGE extends React.Component {
  constructor(props){
    super(props)
  }

    render() {
      let noUndefined = (item) => {
        return item != undefined;
      };
  
      const testVar = this.props.followedTweeds.tweedArray.filter(
        noUndefined
      );
   
      const tweedsDisplayFollowers = testVar.length
        ? testVar.map((tweed) => {
            return (
              <TWEED_DIV_ON_PAGE
                id={tweed.id}
                button={null}
                likeButton={}
                retweedButton={}
                tweedText={tweed.tweed}
                username={tweed.username}
              />
            );
          })
        : null;
  
      return <>{tweedsDisplayFollowers}</>;
    }
  }
  
const mapStateToProps = (state) => {
  return {
    followedTweeds: state.followedTweeds,
  };
};

export default connect(mapStateToProps)(FOLLOWER_TWEEDS_ON_HOMEPAGE);