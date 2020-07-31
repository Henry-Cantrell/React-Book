import React from 'react'
import {SIGN_OUT_BOX} from './nestedcomponents/signoutboxblb'

export class USER_PROFILE_BOTTOM_LEFT_BOX extends React.Component {
    constructor(props) {
      super(props);

      this.toggleShowFalse = this.toggleShowFalse.bind(this)
      this.toggleShowTrue = this.toggleShowTrue.bind(this)

      this.state = {
        show: false,
      };
    }

    toggleShowTrue = () => {
        this.setState({
            show: true
        })
    }

    toggleShowFalse = () => {
        this.setState({
            show: false
        })
    }

    render() {
      return (
        <div>
          {this.state.show ? <SIGN_OUT_BOX signOut={this.props.signOut} toggleShow={this.toggleShowFalse}/> : null}
          <div id="blbMaster" onClick={this.toggleShowTrue}>
            <div id="profileNameBlb"></div>
            <div id="usernameBlb">
              {this.props.userName}
            </div>
          </div>
        </div>
      );
    }
  }
  
