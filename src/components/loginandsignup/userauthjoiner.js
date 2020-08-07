import React from 'react'
import {MODAL_CLASS_FORM} from './modalcc'
import {MAIN_USER_PAGE} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/mainuserpage'
import {useSelector} from 'react-redux'
import firebase from 'firebase'
import {tweedSend} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendTweeds'
import {useDispatch} from 'react-redux'
import {clearTweedStore} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/clearTweeds'

export let USER_AUTH_JOINER = () => {

  const isLogged = useSelector((state) => state.isLogged)
  const uniqueUid = useSelector((state) => state.uidInt)

  const dispatch = useDispatch()

  let getTweedsFromFirebase = () => {

      firebase
      .firestore()
      .collection('users')
      .doc(uniqueUid)
      .collection('userTweeds')
      .orderBy('created', "asc")
      .onSnapshot((snapshot) => {
          dispatch(clearTweedStore())
          snapshot.forEach(doc => {
            dispatch(tweedSend({tweed: doc.data().tweed, created: doc.data().created}))
          });
      })
  }

  getTweedsFromFirebase()


    return (

    <>
      {isLogged ? <MAIN_USER_PAGE/> : <MODAL_CLASS_FORM/>}
    </>
    )
  }

