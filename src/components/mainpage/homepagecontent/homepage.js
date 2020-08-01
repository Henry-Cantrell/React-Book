import React from 'react'
import {HEADER_BAR_HOME_PAGE} from './headerbarhomepage'
import {TWEED_BOX_FORM} from './tweedboxform'

export function HOME_PAGE (props) {
    return (
        <div class='homePageContainer'>
            <HEADER_BAR_HOME_PAGE/>
            <TWEED_BOX_FORM/>
        </div>
    )
}