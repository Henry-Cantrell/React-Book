import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userNameNet } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/userNameNet";
import { USER_PROFILE_BOTTOM_LEFT_BOX } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/profilebox";
import { signOutAction } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/signOutAction";
import { BANNER_CONTENT_FLOW_CONTROLLER } from "./bannercontent";

export let POST_AUTH_DISPLAY_CONTROLLER = () => {
  const dispatch = useDispatch()

  let signOutUser = () => {
    firebase.auth.signOut().then(dispatch(signOutAction()));
  };

  let getUsernameFromFirestore = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(useSelector((state) => state.userUid))
      .get()
      .then((doc) => {
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
      <BANNER_CONTENT_FLOW_CONTROLLER
      />
      <USER_PROFILE_BOTTOM_LEFT_BOX
        signOut={signOutUser}
        username={useSelector((state) => state.username)}
      />
    </>
  );
};
