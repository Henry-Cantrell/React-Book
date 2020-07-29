import React from 'react'
import {MODAL_FUNC} from './modalfc'
import {SHOW_BUTTON} from './showbuttonfc'
import {fireBaseExternalObj} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/firebasedeps'
import {uidNet} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/uidNet'

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
          e.preventDefault();

          const loginEmail = document.querySelector("#loginEmail").value;
          const loginPassword = document.querySelector("#loginPassword").value;

          fireBaseExternalObj.auth
            .signInWithEmailAndPassword(loginEmail, loginPassword)
            .then(
              (cred) => {
                this.props.dispatch(uidNet(cred.user.uid, loginEmail),
                )},
            ).then (
              (document.getElementById("loginEmail").value = ""),
              (document.getElementById("loginPassword").value = "")
            );
        });
    } else {
      document
        .getElementById(this.props.formID)
        .addEventListener("submit", (e) => {
          e.preventDefault();

          const signupEmail = document.querySelector("#signupEmail").value;
          const signupPassword = document.querySelector("#signupPassword")
            .value;

          fireBaseExternalObj.auth
            .createUserWithEmailAndPassword(signupEmail, signupPassword)
            .then(
              (cred) => {
                this.props.dispatch(uidNet(cred.user.uid, signupEmail),
                )},
            ).then(
              (document.getElementById("loginEmail").value = ""),
              (document.getElementById("loginPassword").value = "")
            );
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

//to-do: add window.alert for err throw in .catch(err) method after .then asyncs