import React from 'react'
import { useSelector } from 'react-redux'

export function TWEED_DIV_ON_PAGE (props) {

    const userName = useSelector((state) => state.userName)

    return (
    <div className='tweedBoxHoldingTweeds'>
        <div className = 'tweedBoxHoldingTweedsTweed'>
        {props.tweedText}
        </div>
        <div className = 'userNameInTweedBox'>
            {userName}
        </div>
        </div>
    )
}