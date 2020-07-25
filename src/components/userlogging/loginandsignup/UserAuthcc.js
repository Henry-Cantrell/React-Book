import React from 'react'
import {Modal_Func} from './modalfc'
import {Show_button} from './showbuttonfc'

export class Modal_Class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { classLogin: "hide_modal", 
    }}

    showModal = () => {
        this.setState({ classLogin: "show_modal" });
      };
    
      hideModal = () => {
        this.setState({ classLogin: "hide_modal" });
      };
  
           render() {
               return ( 
            <div>
           <div class='signup_button_style'>
            <Show_button function={this.props.function} click={this.showModal} />
            </div>
            <Modal_Func
            passwordID={this.props.passwordID}
            emailID={this.props.emailID}
            show={this.state.classLogin}
            text={this.props.action}
            function={this.props.purpose}
            hide={this.hideModal}
          />
          </div>
           )
}}