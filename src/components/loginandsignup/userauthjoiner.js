import React from 'react'
import {Modal_Class_Form} from './modalcc'

export class User_Auth_Joiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: false,
      inputFieldClear: true,
      inputEmailValue: "",
      inputPasswordValue: ""
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.clearForm = this.clearForm.bind(this);
  }

  clearForm() {
    this.setState({
      inputEmailValue: "",
      inputPasswordValue: ""
    });
  }

  handleChangeEmail(event) {
    this.setState({ inputEmailValue: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ inputPasswordValue: event.target.value });
  }

  render() {
    const userAuthPage = (
      <Modal_Class_Form
        inputEmailValue={this.state.inputEmailValue}
        inputPasswordValue={this.state.inputPasswordValue}
        handleChangeEmail={this.handleChangeEmail}
        handleChangePassword={this.handleChangePassword}
      />
    );

    return <div>{userAuthPage}</div>;
  }
}

//handle change evt from this component 

//all final graphics content for user auth page should be in a parent cc's render statement for de-mounting on user auth clear

//to-do list: 
//add conditional de-mounting on successful sign-up or log in via .then to auth methods
//capture uid for further use 
//import and display main page content after user auth page de-mounted (is it actually possible do this?...)
