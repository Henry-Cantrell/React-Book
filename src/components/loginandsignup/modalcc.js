import React from 'react'
import {Modal_Class} from './UserAuthcc'

export class Modal_Class_Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        classLogin: "hide_modal",
    };
    }

    render() {
      return (
        <div>
          <div class="login_modals_graphics">
            <div class="header_style_external">
              <h2>Check out my modals: </h2>
            </div>
              <Modal_Class
                handleChangeEmail={this.props.handleChangeEmail}
                handleChangePassword={this.props.handleChangePassword}
                inputEmailValue={this.props.inputEmailValue}
                inputPasswordValue={this.props.inputPasswordValue}
                passwordID="loginPassword"
                emailID="loginEmail"
                function="Log in to an account"
                action="Log in"
                purpose="Log into an account"
              />
            <Modal_Class
              handleChangeEmail={this.props.handleChangeEmail}
              handleChangePassword={this.props.handleChangePassword}
              inputEmailValue={this.props.inputEmailValue}
              inputPasswordValue={this.props.inputPasswordValue}
              passwordID="signupPassword"
              emailID="signupEmail"
              function="Sign up for a new account"
              action="Sign up"
              purpose="Sign up with this form"
            />
          </div>
        </div>
      );
    }
  }
  
  
