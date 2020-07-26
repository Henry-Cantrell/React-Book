//This is perfect and very useful in its current form. DO NOT TOUCH. DO NOT DELETE.

import React from 'react'

export class Modal_Func extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputEmailValue: '',
      inputPasswordValue: '',
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  handleChangeEmail(event) {    
    this.setState({inputEmailValue: event.target.value});  
  }

  handleChangePassword(event) {    
    this.setState({inputPasswordValue: event.target.value});  
  }

  clearForm() {
    this.setState({inputEmailValue: '', inputPasswordValue: ''})
  }

      render() {return ( 
      <div class={this.props.show}>
      <div class='modal_box'>
      <div class='toggle_button'>
            <div class='toggleButton' onClick={this.props.hide}>hide</div>
          </div>
        <div class='modal_box_content'>
          <div class='header_style'>
        <h2 class='modal_interior_header'>{this.props.text}</h2>
          </div>
        <div class="login_one_style">
      <input id={this.props.emailID} value={this.state.inputValue} onChange={this.handleChangeEmail} type='email' class='login_one' placeholder='Email'></input>
        </div> 
        <div class='login_two_style'>
      <input id={this.props.passwordID} value={this.state.inputValue} onChange={this.handleChangePassword} type='password' class='login_two' placeholder='Password'></input>
        </div>
        <div class='button_center'>
        <button class='login_button' id='lin_button' onClick={this.clearForm}>{this.props.function}</button>
        </div>
          </div>
        </div>
      </div> 
    )
  }
}



