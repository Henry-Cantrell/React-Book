import React from 'react'
import './stylesheet_loginandsignup.css'
import {Modal_Func} from './modalfc'
import {Show_button} from './showbuttonfc'
  
export class Modal_Class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { classLogin: "hide_modal", classSignup: "hide_modal", purpose: this.props.purpose, action: this.props.action
    }
  
    showModalLogin = () => {
      this.setState({ classLogin: "show_modal" });
    };
  
    hideModalLogin = () => {
      this.setState({ classLogin: "hide_modal" });
    };
  
    showModalSignup = () => {
      this.setState({ classSignup: "show_modal" });
    };
  
    hideModalSignup = () => {
      this.setState({ classSignup: "hide_modal" });
    };
  

    render() {
      return (
        <div>
          <div class="login_modals_graphics">
              <div class='header_style_external'>
            <h2>Check out my modals: </h2>
            </div>
            <Show_button function={this.state.purpose} click={this.showModalLogin} />
            <Modal_Func
            show={this.state.classLogin}
            text={this.state.action}
            function={this.state.purpose}
            hide={this.hideModalLogin}
          />
          <div class='signup_button_style'>
            <Show_button function={this.state.purpose} click={this.showModalSignup} />
            </div>
            <Modal_Func
              show={this.state.classSignup}
              text={this.state.action}
              function={this.state.action}
              hide={this.hideModalSignup}
            />
          </div>
        </div>
      );
    }
  }
  
  //split into two components; one controls login, other controls signup