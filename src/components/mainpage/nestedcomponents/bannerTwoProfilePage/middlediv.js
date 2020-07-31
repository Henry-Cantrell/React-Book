import React from 'react'
import {MODAL_USER_PROFILE} from './modalBackgroundUserProfile'

export class MIDDLE_DIV_CONTENT extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggleShowTrue = this.toggleShowTrue.bind(this);
      this.toggleShowFalse = this.toggleShowFalse.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    toggleShowTrue = () => {
      this.setState({
        show: true,
      });
    };
  
    toggleShowFalse = () => {
      this.setState({
        show: false,
      });
    };
  
    render() {
      return (
        <div class="middleDiv">
            <div class="userNameDisplayUidbProfilePage">
              Username: {this.props.userName}
            </div>
            <div class="userBioDisplay">Bio: {this.props.userBio}</div>
            <div class="uidbModalDiv">
              <button class="uidModalButton" onClick={this.toggleShowTrue}>
                Update profile information
              </button>
            </div>
            {this.state.show ? (
              <MODAL_USER_PROFILE hide={this.toggleShowFalse} />
            ) : null}
          </div>
      );
    }
  }
  
  