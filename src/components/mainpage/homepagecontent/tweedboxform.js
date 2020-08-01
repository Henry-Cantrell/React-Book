import React from 'react'
import {fireBaseExternalObj} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/firebasedeps'
import {TWEED_BOX} from './tweedbox'
import {useSelector} from 'react-redux'

export function TWEED_BOX_FORM(props) {

    const uniqueUid = useSelector((state) => state.uidInt)

    let sendTweedToFirebase = (e) => {

        e.preventDefault()

        fireBaseExternalObj
        .dataBase
        .collection('users')
        .doc(uniqueUid)
        .update({
            personal_tweeds: {
                tweed: 'test'
            }
          })
    }

    return (
      <form onSubmit={sendTweedToFirebase} id="tweedboxform">
        <TWEED_BOX/>
      </form>
    );
  }
  