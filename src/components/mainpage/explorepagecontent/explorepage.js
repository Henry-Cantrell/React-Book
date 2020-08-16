import React from 'react'
import {TWEED_DIV_ON_PAGE} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/homepagecontent/tweedDivOnPage'
import {connect} from 'react-redux'
import {FOLLOW_BUTTON} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/followbutton'

class EXPLORE_PAGE extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let noUndefined = (item) => {
      return item != undefined;
    };

    const testVar = this.props.globalTweeds.tweedArray.filter(noUndefined);

    const tweedsDisplay = testVar.length ? (
      testVar.map((tweed) => {
        return (
        <TWEED_DIV_ON_PAGE id={tweed.id} tweedText={tweed.tweed} likeButton={null} retweedButton={null} button={<FOLLOW_BUTTON uid={tweed.uid} uniqueUid={this.props.uniqueUid} id={tweed.id}/>} usernameOfCurrentUser={this.props.usernameOfCurrentUser} />
        )
      })
    ) : (
      <p>empty!</p>
    );

    return <div className="tweedDisplayList">{tweedsDisplay}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    globalTweeds: state.globalTweeds,
  };
};

export default connect(mapStateToProps)(EXPLORE_PAGE);