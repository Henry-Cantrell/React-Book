import React from 'react'
import {useSelector} from 'react-redux'
import {SIGN_OUT_BOX} from './nestedcomponents/signoutboxblb'

export class USER_PROFILE_BOTTOM_LEFT_BOX extends React.Component {
    constructor(props) {
      super(props);

      this.toggleShow = this.toggleShow.bind(this)

      this.state = {
        show: false,
      };
    }

    toggleShow = () => {
        this.setState({
            show: true
        })
    }

    render() {
      return (
        <div>
          {this.state.show ? <SIGN_OUT_BOX toggleShow={this.toggleShow}/> : null}
          <div id="blbMaster" onClick={this.toggleShow}>
            <div id="profileNameBlb"></div>
            <div id="usernameBlb">
              {this.props.userName}
            </div>
          </div>
        </div>
      );
    }
  }
  
