import React from 'react'
import {fireBaseExternalObj} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/firebasedeps'

export class Modal_Func extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValueEmail: "",
      inputValuePassword: "",
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeEmail(e) {
    this.setState({ inputValueEmail: e.target.value });
  }

  handleChangePassword(e) {
    this.setState({ inputValuePassword: e.target.value });
  }

  clearForm() {
    this.setState({inputValuePassword: '', inputValueEmail: ''})
  }

  componentDidMount() {
    //User auth method

    if (this.props.formID === "loginForm") {
      document.getElementById(this.props.formID).addEventListener("submit", (e) => {
        e.preventDefault();

        const loginEmail = document.querySelector("#loginEmail").value;
        const loginPassword = document.querySelector("#loginPassword").value;

        fireBaseExternalObj.auth.signInWithEmailAndPassword(
          loginEmail,
          loginPassword
        );
        this.clearForm();
      });
    } else {
      document.getElementById(this.props.formID).addEventListener("submit", (e) => {
        e.preventDefault();

        const signupEmail = document.querySelector("#signupEmail").value;
        const signupPassword = document.querySelector("#signupPassword").value;

        fireBaseExternalObj.auth.createUserWithEmailAndPassword(
          signupEmail,
          signupPassword
        );
        this.clearForm();
      });
    }
  }

  render() {
    return (
      <form id={this.props.formID}>
      <div class={this.props.show}>
          <div class="modal_box">
            <div class="toggle_button">
              <div class="toggleButton" onClick={this.props.hide}>
                Hide
              </div>
            </div>
            <div class="modal_box_content">
              <div class="header_style">
                <h2 class="modal_interior_header">{this.props.text}</h2>
              </div>
              <div class="login_one_style">
                <input
                  onChange={this.handleChangeEmail}
                  id={this.props.emailID}
                  value={this.state.inputValueEmail}
                  onChange={this.handleChangeEmail}
                  type="email"
                  class="login_one"
                  placeholder="Email"
                ></input>
              </div>
              <div class="login_two_style">
                <input
                  onChange={this.handleChangePassword}
                  id={this.props.passwordID}
                  value={this.state.inputValuePassword}
                  onChange={this.handleChangePassword}
                  type="password"
                  class="login_two"
                  placeholder="Password"
                ></input>
              </div>
              <div class="button_center">
                <button class="login_button" id="lin_button">
                  {this.props.function}
                </button>
              </div>
            </div>
          </div>
      </div>
      </form>
    );
  }
}

//to-do:
//pass formID depending on responsibility of component in parent components to this component
