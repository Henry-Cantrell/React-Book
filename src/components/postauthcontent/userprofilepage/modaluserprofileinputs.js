import React from "react";
import { useSelector } from "react-redux";
import firebase from "firebase";
import { useDispatch } from "react-redux";
import { userBioSend } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/userBioSend";

export function MODAL_USER_PROFILE_INPUTS(props) {
  const userUid = useSelector((state) => state.userUid);
  const dispatch = useDispatch();

  let giveBioToFirebase = (e) => {
    e.preventDefault();

    if (document.getElementById("userBioFormSubmit").value.length < 160) {
      firebase
        .firestore()
        .collection("users")
        .doc(userUid)
        .update({
          userBio: document.getElementById("userBio").value,
        })
        .then(
          dispatch(
            userBioSend(document.getElementById("userBioFormSubmit").value)
          )
        )
        .then((document.getElementById("userBioFormSubmit").value = ""));
    } else {
      window.alert("Your user bio must be uner 161 characters in length");
    }
  };

  let uploadBannerToFirebase = (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref(`${userUid}/userBanner`);

    storageRef.put(file);

    firebase
    .firestore()
    .collection('userBannerSet')
    .doc(userUid)
    .set({
      dnd:'dnd'
    })
  };

  let uploadAvatarToFirebase = (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref(`${userUid}/userAvatar`);

    storageRef.put(file);

    const dndFb = {
      dnd: Math.random()
    }

    firebase
    .firestore()
    .collection("userAvatarSet")
    .doc(`${userUid}`)
    .set(
      dndFb
    )
  };

  return (
    <>
      <div>
        <form onSubmit={giveBioToFirebase}>
          <input placeholder="Update your bio here" id="userBio"></input>
          <div>
            <button id="userBioFormSubmit">Submit your bio info</button>
          </div>
        </form>
      </div>
      <div className="bannerUpload">
        <p>Change banner picture</p>
        <input onChange={uploadBannerToFirebase} type="file"></input>
      </div>
      <div>
        <p>Change avatar</p>
        <input onChange={uploadAvatarToFirebase} type="file"></input>
      </div>
    </>
  );
}
