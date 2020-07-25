import React from 'react'
import {Modal_SignUp} from './signupfc'
import {Show_button} from './hidebuttonfc'

export class SignUp_Display extends React.Component{
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
              <div class='show_modal_buttons_two'>
          <Show_button function={'Sign up'} click={this.showModal}/>
          </div>
          <Modal_SignUp show={this.state.class} hide={this.hideModal}/>
          </div>
        )
    }
}
