import firebase from "firebase";
import { tweedSend } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendTweeds";
import { clearTweedStore } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/clearTweeds";

export let userTweedsFbToRedux = (userUid, dispatch) => {

    firebase
      .firestore()
      .collection("users")
      .doc(userUid)
      .collection("userTweeds")
      .orderBy("created", "asc")
      .onSnapshot((snapshot) => {
        dispatch(clearTweedStore());
        snapshot.forEach((doc) => {
          dispatch(
            tweedSend({
              tweed: doc.data().tweed,
              username: doc.data().username,
              created: doc.data().created,
              id: doc.id,
              uid: doc.data().uid,
            })
          );
        });
      });
  };