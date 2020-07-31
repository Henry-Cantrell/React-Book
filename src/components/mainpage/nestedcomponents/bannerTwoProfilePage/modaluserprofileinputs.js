import React from 'react'
import {useSelector} from 'react-redux'
import {fireBaseExternalObj} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/firebasedeps'
import {useDispatch} from 'react-redux'
import {userBioSend} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/userBioSend'

export function MODAL_USER_PROFILE_INPUTS() {
    const uniqueUid = useSelector((state) => state.uidInt);
    const dispatch = useDispatch();
  
    let giveBioToFirebase = (e) => {
      e.preventDefault();
  
      if (document.getElementById("userBioFormSubmit").value.length < 160) {
        fireBaseExternalObj.dataBase
          .collection("users")
          .doc(uniqueUid)
          .update({
            userBio: document.getElementById("userBio").value,
          })
          .then(
            dispatch(
              userBioSend(document.getElementById("userBioFormSubmit").value)
            ),
            (document.getElementById("userBioFormSubmit").value = "")
          );
      } else {
        window.alert("Your user bio must be uner 161 characters in length");
      }
    };
  
    return (
      <>
        <form onSubmit={giveBioToFirebase}>
          <input
            placeholder="Enter your bio information here"
            id="userBio"
          ></input>
          <div>
            <button id="userBioFormSubmit">Submit your bio info</button>
          </div>
        </form>
      </>
    );
  }
  
  

