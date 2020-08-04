import React from 'react'
import {HEADER_BAR_HOME_PAGE} from './headerbarhomepage'
import {TWEED_BOX_FORM} from './tweedboxform'
import {TWEED_SHOW} from './tweedshower'
import {useSelector} from 'react-redux'
import firebase from 'firebase'

export function HOME_PAGE (props) {

    const uniqueUid = useSelector((state) => state.uidInt)

    return (
        <div class='homePageContainer'>
            <HEADER_BAR_HOME_PAGE/>
            <TWEED_BOX_FORM/>
            <div className='borderBlock'></div>
            <TWEED_SHOW uniqueUid={uniqueUid}/>
        </div>
    )
}