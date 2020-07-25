import React from 'react'
import './stylesheet_loginandsignup.css'
import {Modal} from './modal'
import {Show_button} from './showbuttonfc'
  
export class Login_Display extends React.Component{
    constructor(props) {
        super(props);
        this.state = {class: 'hide_modal'};
    }
    
    showModal = () => {
    this.setState({class: 'show_modal'})
    }

    hideModal = () => {
    this.setState({class: 'hide_modal'})
    }

    render() {
        return (
            <div>
          <div class='login_modals_graphics'>
              <h2>Check out my modals: </h2>
              </div>
              <div class='show_modal_buttons'>
          <Show_button function={'Log in'} click={this.showModal}/>
          </div>
          <Modal show={this.state.class} text={'Log into your account'} function={'Log in'} hide={this.hideModal}/>
          </div>
        )
    }
}
