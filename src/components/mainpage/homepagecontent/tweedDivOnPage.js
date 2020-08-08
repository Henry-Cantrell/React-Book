import React from 'react'
import { useSelector } from 'react-redux'
import {DELETE_BUTTON} from './deletebuttonfortweeds'

export function TWEED_DIV_ON_PAGE (props) {

    const userName = useSelector((state) => state.userName)

    return (
    <div className='tweedBoxHoldingTweeds'>
        <div className = 'tweedInTweedBox'>
        {`Username: ${userName}`}
        </div>
        <div className = 'userNameInTweedBox'>
        {`Tweed content: ${props.tweedText}`}
        </div>
        <DELETE_BUTTON id = {props.id} text='Delete this tweed'/>
        </div>
    )
}