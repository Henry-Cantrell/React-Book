import React from "react";
import { AUTH_FIELDS_ACCESS_DIVS } from "./componentsforauthform/authfieldsaccessdivs";
import { AUTH_MODAL_CONTROLLER } from "./componentsforauthform/authmodalcontroller";

export class PRE_AUTH_DISPLAY_CONTROLLER extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoginModal: false,
      showSignupModal: false,
    };
  }

  loginModalShow = (e) => {
    e.stopPropagation();

    this.setState({
      showLoginModal: true,
    });
  };

  loginModalHide = (e) => {
    e.stopPropagation();

    this.setState({
      showLoginModal: false,
    });
  };

  signupModalShow = (e) => {
    e.stopPropagation();

    this.setState({
      showSignupModal: true,
    });
  };

  signupModalHide = (e) => {
    e.stopPropagation();

    this.setState({
      showSignupModal: false,
    });
  };

  render() {
    return (
      <>
        <AUTH_FIELDS_ACCESS_DIVS
          showLogin={this.loginModalShow}
          showSignup={this.signupModalShow}
        />
        {this.state.showLoginModal ? (
          <AUTH_MODAL_CONTROLLER
            hideLogin={this.loginModalHide}
            forLogin={true}
          />
        ) : null}
        {this.state.showSignupModal ? (
          <AUTH_MODAL_CONTROLLER hideSignup={this.signupModalHide} />
        ) : null}
      </>
    );
  }
}
