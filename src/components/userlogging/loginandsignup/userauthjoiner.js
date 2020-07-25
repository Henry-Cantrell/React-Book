import React from 'react'
import {Modal_Class_Form} from './modalcc'

export class User_Auth_Joiner extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            loginStatus: false,
        }
    }
    
    render() {
        return (
        <Modal_Class_Form/>
    )
    }
}

