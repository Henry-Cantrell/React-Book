import React from "react";
import firebase from "firebase";
import { userUidSend } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/useruidsend";
import { LOGIN_MODAL } from "./loginmodal";
import { SIGNUP_MODAL } from "./signupmodal";
import { useDispatch } from "react-redux"; 

export let AUTH_MODAL_CONTROLLER = (props) => {
  const dispatch = useDispatch();

  //This component processes login/signup events. There is a form in the return method which conditionally sets -->
  //--> its own onSubmit method from one of two of the handler funcs, dependent on the passed forLogin prop via -->
  //--> a ternary operator. The login and signup modals are also imported and conditionally rendered -->
  //--> via this component, once again dependent on the passed forLogin prop in the return method.

  let loginHandler = (e) => {+
    e.preventDefault();
    const loginEmail = document.querySelector("#auth-input-email").value;
    const loginPassword = document.querySelector("#auth-input-password").value;
    firebase
      .auth()
      .signInWithEmailAndPassword(loginEmail, loginPassword)
      .then((cred) => {
        dispatch(userUidSend(cred.user.uid, loginEmail));
      })
      .catch((Error) => {
        window.alert("Error: incorrect username or password");
      });
  };

  let signupHandler = (e) => {
    e.preventDefault();
    const signupEmail = document.querySelector("#auth-input-email").value;
    const signupPassword = document.querySelector("#auth-input-password").value;
    const signupUsername = document.querySelector("#auth-input-username").value;
    if (signupUsername.length <= 12) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(signupEmail, signupPassword)
        .then((cred) => {
          dispatch(
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
        .catch((Error) => {
          window.alert("Error: user info previously created");
        });
    } else {
      window.alert("Username must be less than 13 characters long");
    }
  };
  return (
    <form onSubmit={props.forLogin !== undefined ? loginHandler : signupHandler}>
      {props.forLogin !== undefined ? (
        <LOGIN_MODAL hideLogin={props.hideLogin} />
      ) : (
        <SIGNUP_MODAL hideSignup={props.hideSignup} />
      )}
    </form>
  );
};
