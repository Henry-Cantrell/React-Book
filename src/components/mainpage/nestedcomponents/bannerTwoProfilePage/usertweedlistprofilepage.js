import React from 'react'
import {TWEED_DIV_ON_PAGE} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/homepagecontent/tweedDivOnPage'
import {connect} from 'react-redux'

class TWEEDS_PROFILE extends React.Component {
    render() {
      let noUndefined = (item) => {
        return item != undefined;
      };
      
      const testVar = this.props.userTweeds.tweedArray.filter(noUndefined);
  
      const tweedsDisplay = testVar.length ? (
        testVar.map((tweed) => {
          return <TWEED_DIV_ON_PAGE id={tweed.id} tweedText={tweed.tweed} username={tweed.username} />;
        })
      ) : (
        <p>empty!</p>
      );
  
      return (
          <div className="tweedDisplayList">{tweedsDisplay}</div>
      );
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      userTweeds: state.userTweeds,
    };
  };
  
  export default connect(mapStateToProps)(TWEEDS_PROFILE);