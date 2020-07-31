import React from 'react'
import {useSelector} from 'react-redux'
import {fireBaseExternalObj} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/firebasedeps'

export function MODAL_USER_PROFILE_INPUTS() {
    let giveBioToFirebase = (e) => {
      e.preventDefault();
  
      if (document.getElementById("userBioFormSubmit").value.length < 160) {
        fireBaseExternalObj.dataBase
          .collection("users")
          .doc(useSelector((state) => state.uid))
          .set({
            user_bio: document.getElementById("userBioFormSubmit").value,
          });
      }
    };
  
    return (
      <>
        <form onSubmit={giveBioToFirebase}>
          <input
            placeholder="Enter your bio information here"
            id="userBio"
          ></input>
          <button id="userBioFormSubmit"></button>
        </form>
      </>
    );
  }
  

