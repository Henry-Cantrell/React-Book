import React from 'react'
import {TOP_DIV_CONTENT} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/bannerTwoProfilePage/topdivcontent'
import {MIDDLE_DIV_CONTENT} from './middlediv'
import {BUTTON_BAR} from './buttonbar'
import {useSelector} from 'react-redux'
import {fireBaseExternalObj} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/firebasedeps.js'
import {useDispatch} from 'react-redux'
import {userBioSend} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/userBioSend'
import {userJoinDateNet} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/userJoinDateNet'
import TWEED_PROFILE from './usertweedlistprofilepage'

export function PROFILE_PAGE() {

    const userBioFromRedux = useSelector((state) => state.userBio)
    const uniqueUid = useSelector((state) => state.uidInt)
    const usernameFromRedux = useSelector((state) => state.userName)
    const joinDateFromRedux = useSelector((state) => state.joinDate)
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

    let getJoinDateFromFirestore = () => {
        const docRef = fireBaseExternalObj.dataBase.collection('users').doc(uniqueUid)

        docRef.get().then(function(doc) {
            if (doc.exists) {
                dispatch(userJoinDateNet(doc.data().joinDate));
            } 
        })
    }
    
    getJoinDateFromFirestore()

    return (
      <div class="parentDiv">
        <TOP_DIV_CONTENT />
        <MIDDLE_DIV_CONTENT joinDate={joinDateFromRedux} userBio={userBioFromRedux} userName={usernameFromRedux}/>
        <BUTTON_BAR />
        <TWEED_PROFILE />
      </div>
    );
  }
  
  //userBio info display is dependent on Redux store state, which in turn reads from the firebase uid doc 