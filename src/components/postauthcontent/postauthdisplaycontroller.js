import React from "react";
import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase";
import { userNameNet } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/userNameNet";
import { USER_PROFILE_BOTTOM_LEFT_BOX } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/profilebox";
import { signOutAction } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/signOutAction";
import { BANNER_CONTENT_FLOW_CONTROLLER } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/bannercontentflowcontroller";

export let POST_AUTH_DISPLAY_CONTROLLER = () => {
  const dispatch = useDispatch();
  const userUid = useSelector((state) => state.userUid);
  const username = useSelector((state) => state.username);

  let signOutUser = () => {
    firebase.auth().signOut().then(dispatch(signOutAction()));
  };

  let loadUsername = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(userUid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          dispatch(userNameNet(doc.data().username));
        } else {
          window.alert("No username in firebase");
        }
      })
      .catch(function (error) {
        window.alert("Error with document retrieval method");
      });
  };

  loadUsername();

  return (
    <>
      <BANNER_CONTENT_FLOW_CONTROLLER />
      <USER_PROFILE_BOTTOM_LEFT_BOX signOut={signOutUser} username={username} />
    </>
  );
};
