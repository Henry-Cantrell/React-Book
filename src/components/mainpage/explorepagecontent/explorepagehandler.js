import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {sendAllUserInfo} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendalluserinfotoredux'
import EXPLORE_PAGE from './explorepage'
import firebase from 'firebase'
import {eraseAllUserInfo} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/erasealluserinfo'

export let EXPLORE_PAGE_HANDLER = () => {
  const dispatch = useDispatch();
  const uniqueUid = useSelector((state) => state.uidInt)

  let allUserInfoFromFbToRedux = () => {
    firebase
      .firestore()
      .collection('users')
      .get()
      .then(
        (users) => {
          dispatch(eraseAllUserInfo());
          users.forEach((user) => {
            dispatch(sendAllUserInfo({
              username: user.data().username,
              uid: user.data().uid,
              bio: user.data().userBio,
              joinDate: user.data().joinDate,
              followedCount: user.data().followedCount,
              followerCount: user.data().followerCount
            }))
          })
        }
      )
  }

  allUserInfoFromFbToRedux()

  return (
    <div className="explorePageDiv">
      <EXPLORE_PAGE uniqueUid={uniqueUid}/>
    </div>
  );
};
