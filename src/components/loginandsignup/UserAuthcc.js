import React from 'react'
import {MODAL_FUNC} from './modalfc'
import {SHOW_BUTTON} from './showbuttonfc'
import {fireBaseExternalObj} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/firebasedeps'

export class MODAL_CLASS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classLogin: "hide_modal",
    };
  }

  componentDidMount() {
    if (this.props.formID === "loginForm") {
      document
        .getElementById(this.props.formID)
        .addEventListener("submit", (e) => {
          e.preventDefault()

          const loginEmail = document.querySelector("#loginEmail").value;
          const loginPassword = document.querySelector("#loginPassword").value;

          fireBaseExternalObj.auth
            .signInWithEmailAndPassword(loginEmail, loginPassword)
            .then(this.props.loginStateUpdate,
              loginEmail = "",
              loginPassword = "");
        });
    } else {
      document
        .getElementById(this.props.formID)
        .addEventListener("submit", (e) => {
          e.preventDefault()

          const signupEmail = document.querySelector("#signupEmail").value;
          const signupPassword = document.querySelector("#signupPassword")
            .value;

          fireBaseExternalObj.auth
            .createUserWithEmailAndPassword(signupEmail, signupPassword)
            .then(this.props.loginStateUpdate,
                  document.getElementById('signupEmail').value = "",
                  document.getElementById('signupPassword').value = ""
              )            
        });
    }
  }

  showModal = () => {
    this.setState({ classLogin: "show_modal" });
  };

  hideModal = () => {
    this.setState({ classLogin: "hide_modal" });
  };

  render() {
    return (
      <div>
        <div class="signup_button_style">
          <SHOW_BUTTON function={this.props.function} click={this.showModal} />
        </div>
        <MODAL_FUNC
          formID={this.props.formID}
          passwordID={this.props.passwordID}
          emailID={this.props.emailID}
          show={this.state.classLogin}
          text={this.props.action}
          function={this.props.purpose}
          hide={this.hideModal}
        />
      </div>
    );
  }
}
