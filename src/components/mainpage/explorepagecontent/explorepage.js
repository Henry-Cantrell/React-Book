import React from 'react'
import {ALL_USER_INFO_ON_PAGE} from './alluserinfoonpage'
import {connect} from 'react-redux'

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
        if (userInfo.username != null && 
            this.props.uniqueUid != userInfo.uid) {
        return (
        <ALL_USER_INFO_ON_PAGE 
        username={userInfo.username}
        userBio={userInfo.bio}
        joinDate={userInfo.joinDate}
        followedCount={userInfo.followedCount}
        followerCount={userInfo.followerCount}
        uid={userInfo.uid}
        />
        )
      }})
    ) : (
      null
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