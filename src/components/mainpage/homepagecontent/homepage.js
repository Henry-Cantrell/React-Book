import React from 'react'
import {HEADER_BAR_HOME_PAGE} from './headerbarhomepage'
import {TWEED_BOX_FORM} from './tweedboxform'
import {TWEED_SHOW} from './tweedshower'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'

export function HOME_PAGE () {
  
    return (

        <div class='homePageContainer'>
            <HEADER_BAR_HOME_PAGE/>
            <TWEED_BOX_FORM/>
            <div className='borderBlock'></div>
            <div className='tweedDisplayList'>
            </div>
        </div>
    )
}

//to-do:
//determine why redux store wont correctly accept params