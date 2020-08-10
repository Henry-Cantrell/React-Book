import React from 'react'
import { useSelector } from 'react-redux'
import {DELETE_BUTTON} from './deletebuttonfortweeds'

export function TWEED_DIV_ON_PAGE (props) {

    return (
    <div className='tweedBoxHoldingTweeds'>
        <div className = 'tweedInTweedBox'>
        {`Username: ${props.username}`}
        </div>
        <div className = 'userNameInTweedBox'>
        {`Tweed content: ${props.tweedText}`}
        </div>
        {props.button}
        </div>
    )
}