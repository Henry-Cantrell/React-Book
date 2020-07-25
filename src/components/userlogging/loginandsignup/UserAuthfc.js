import React from 'react'
import {Modal_Func} from './modalfc'

export class Modal_Class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { classLogin: "hide_modal", 
    }

           return ( 
            <div>
           <div class='signup_button_style'>
            <Show_button function={props.function} onClick={props.showModal} />
            </div>
            <Modal_Func
            show={props.class}
            text={props.action}
            function={props.purpose}
            hide={props.hideModalLogin}
          />
          </div>
           )
}