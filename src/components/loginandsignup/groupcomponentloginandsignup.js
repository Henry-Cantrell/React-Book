import React from 'react'
import {Modal_Class_Form} from './modalcc'

export class GroupComponentLoginAndSignup extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            loginStatus: false,
        }
    }
    
    render() {
        return (
            <form>
            <Modal_Class_Form/>
            </form>
    )
    }
}

//restructure app.js to exclude this file and delete for final rendering to DOM in index.js