import React from "react";
import { HEADER_BAR_HOME_PAGE } from "./headerbarhomepage";
import { TWEED_BOX_FORM } from "./tweedboxform";
import { TWEED_DIV_ON_PAGE } from "./tweedDivOnPage";
import { connect } from "react-redux";

class HOME_PAGE extends React.Component {
    render() {
      let noUndefined = (item) => {
        return item != undefined;
      };
  
      const testVar = this.props.userTweeds.tweedArray.filter(noUndefined);
  
      const tweedsDisplay = testVar.length ? (
        testVar.map((tweed) => {
          return <TWEED_DIV_ON_PAGE id={tweed.id} tweedText={tweed.tweed} />;
        })
      ) : (
        <p>empty!</p>
      );
  
      return (
        <div class="homePageContainer">
          <HEADER_BAR_HOME_PAGE />
          <TWEED_BOX_FORM />
          <div className="borderBlock"></div>
          <div className="tweedDisplayList">{tweedsDisplay}</div>
        </div>
      );
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      userTweeds: state.userTweeds,
    };
  };
  
  export default connect(mapStateToProps)(HOME_PAGE);

  //to-do:
  //make this, but for profile page, to display usertweeds there as well
  //then starrt building explore page
  