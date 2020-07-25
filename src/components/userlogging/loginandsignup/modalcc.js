import React from 'react'
import './stylesheet_loginandsignup.css'
import {Modal_Func} from './modalfc'
import {Show_button} from './showbuttonfc'
  
export class Modal_Class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { classLogin: "hide_modal", classSignup: "hide_modal" };
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
            <h2>Check out my modals: </h2>
          </div>
          <div class="show_modal_buttons">
            <Show_button function={"Log in"} click={this.showModalLogin} />
          </div>
          <Modal_Func
            show={this.state.classLogin}
            text={"Log into your account"}
            function={"Log in"}
            hide={this.hideModalLogin}
          />
          <div class="show_modal_buttons_two">
            <Show_button function={"Sign up"} click={this.showModalSignup} />
            <Modal_Func
              show={this.state.classSignup}
              text={"Sign up for an account"}
              function={"Sign in"}
              hide={this.hideModalSignup}
            />
          </div>
        </div>
      );
    }
  }
  