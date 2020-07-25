import React from 'react'
import {Modal_Class} from './modalcc'

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
            <Modal_Class />
            </form>
    )
    }
}

//write in the method that processes login and determines if login event is true or not with a setState method call for conditional render(via async- refer to ytube tutorial!)