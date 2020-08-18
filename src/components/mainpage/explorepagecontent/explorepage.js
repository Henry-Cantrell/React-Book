import React from 'react'
import {FOLLOW_BUTTON} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/followbutton'

class EXPLORE_PAGE extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let noUndefined = (item) => {
      return item != undefined;
    };

    const testVar = this.props.allUserInfo.infoArray.filter(noUndefined);

    const allUserInfoDisplay = testVar.length ? (
      testVar.map((userInfo) => {
        return (
        <ALL_USER_INFO_ON_PAGE />
        )
      })
    ) : (
      <p>empty!</p>
    );

    return <div className="tweedDisplayList">{allUserInfoDisplay}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    allUserInfo: state.allUserInfo,
  };
};

export default connect(mapStateToProps)(EXPLORE_PAGE);

//pass 'all user info' from redux store to component in allUserInfoDisplay as props