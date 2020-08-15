import React from 'react'
import {useSelector} from 'react-redux'
import {fireBaseExternalObj} from '../../firebasedeps'
import {useDispatch} from 'react-redux'
import {userNameNet} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/userNameNet'
import {USER_PROFILE_BOTTOM_LEFT_BOX} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/profilebox'
import {signOutAction} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/signOutAction'
import {BANNER_CONTENT_FLOW_CONTROLLER} from './bannercontent'

export let MAIN_USER_PAGE = (props) => {
    const dispatch = useDispatch();
    const uniqueUid = useSelector((state) => state.uidInt);
    const username = useSelector((state) => state.userName)

    let signOutUser = () => {
      fireBaseExternalObj.auth.signOut().then(dispatch(signOutAction()));
    };
  
    let getUsernameFromFirestore = () => {
      const docRef = fireBaseExternalObj.dataBase
        .collection("users")
        .doc(uniqueUid);
  
      docRef
        .get()
        .then(function (doc) {
          if (doc.exists) {
            dispatch(userNameNet(doc.data().username));
          } else {
            window.alert("No username in firebase");
          }
        })
        .catch(function (error) {
          window.alert("Error with document retrieval method in mainuserpage.js");
        });
    };
  
    getUsernameFromFirestore();
  
    return (
      <>
        <BANNER_CONTENT_FLOW_CONTROLLER username={username} dispatch={dispatch} uniqueUid={uniqueUid}/>
        <USER_PROFILE_BOTTOM_LEFT_BOX
          signOut={signOutUser}
          userName={`@${useSelector((state) => state.userName)}`}
        />
      </>
    );
  };
  