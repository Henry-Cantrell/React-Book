import React from 'react'
import {HEADER_BAR_HOME_PAGE} from './headerbarhomepage'
import {TWEED_BOX_FORM} from './tweedboxform'
import {TWEED_SHOW} from './tweedshower'
import {useSelector} from 'react-redux'
import firebase from 'firebase'
import {tweedSend} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendTweeds'
import {useDispatch} from 'react-redux'

export function HOME_PAGE () {

    const uniqueUid = useSelector((state) => state.uidInt)
    const dispatch = useDispatch()

    let getTweedsFromFirebase = () => {
        firebase
        .firestore()
        .collection('users')
        .doc(uniqueUid)
        .collection('userTweeds')
        .get()
        .then((snapshot) => {
            snapshot.forEach(doc => {
                dispatch(tweedSend({tweed: doc.data().tweed}))
            });
        })
    }

    getTweedsFromFirebase()

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