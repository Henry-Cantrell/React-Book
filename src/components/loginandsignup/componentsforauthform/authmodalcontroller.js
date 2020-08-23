import React from "react";
import firebase from "firebase";
import { userUidSend } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/useruidsend";

export let AUTH_MODAL_CONTROLLER = (props) => {
  let loginHandler = (e) => {
    e.preventDefault();
    const loginEmail = document.querySelector("#authEmail").value;
    const loginPassword = document.querySelector("#authPassword").value;
    firebase
      .auth()
      .signInWithEmailAndPassword(loginEmail, loginPassword)
      .then((cred) => {
        this.props.dispatch(userUidSend(cred.user.uid, loginEmail));
      })
      .then(
        (document.getElementById("authEmail").value = ""),
        (document.getElementById("authPassword").value = "")
      )
      .catch((Error) => {
        window.alert("Error: incorrect username or password");
      });
  };

  let signupHandler = (e) => {
    e.preventDefault();
    const signupEmail = document.querySelector("#authEmail").value;
    const signupPassword = document.querySelector("#authPassword").value;
    const signupUsername = document.querySelector("#authUsername").value;
    if (signupUsername.length <= 12) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(signupEmail, signupPassword)
        .then((cred) => {
          this.props.dispatch(
            userUidSend(cred.user.uid, signupEmail, signupUsername),
            firebase
              .firestore()
              .collection("users")
              .doc(cred.user.uid)
              .set({
                followedCount: 0,
                followerCount: 0,
                uid: cred.user.uid,
                email: signupEmail,
                username: signupUsername,
                userBio: "Set up your bio",
                joinDate:
                  (new Date().getMonth() + 1).toString() +
                  "-" +
                  new Date().getFullYear().toString(),
              })
          );
        })
        .then(
          (document.getElementById("authEmail").value = ""),
          (document.getElementById("authPassword").value = "")
        )
        .catch((Error) => {
          window.alert("Error: user info previously created");
        });
    } else {
      window.alert("Username must be less than 13 characters long");
    }
  };
  return (
    <form
      onSubmit={props.forLogin != undefined ? loginHandler : signupHandler}
    ></form>
  );
};
