import React from 'react'
import {TOP_DIV_CONTENT} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/bannerTwoProfilePage/topdivcontent'
import {MIDDLE_DIV_CONTENT} from './middlediv'
import {BUTTON_BAR} from './buttonbar'
import {useSelector} from 'react-redux'
import {fireBaseExternalObj} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/firebasedeps.js'
import {useDispatch} from 'react-redux'
import {userBioSend} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/userBioSend'

export function PROFILE_PAGE() {

    const userBioFromRedux = useSelector((state) => state.userBio)
    const uniqueUid = useSelector((state) => state.uidInt)
    const usernameFromRedux = useSelector((state) => state.userName)
    const dispatch = useDispatch()

    let getUserBioFromFirestore = () => {
        const docRef = fireBaseExternalObj.dataBase.collection('users').doc(uniqueUid)

        docRef.get().then(function(doc) {
            if (doc.exists) {
                dispatch(userBioSend(doc.data().userBio));
            } 
        })
    }

    getUserBioFromFirestore()

    return (
      <div class="parentDiv">
        <TOP_DIV_CONTENT />
        <MIDDLE_DIV_CONTENT userBio={userBioFromRedux} userName={usernameFromRedux}/>
        <BUTTON_BAR />
      </div>
    );
  }
  