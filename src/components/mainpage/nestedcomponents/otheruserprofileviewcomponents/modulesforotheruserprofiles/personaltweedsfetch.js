import { otherUserPersonalTweeds } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otheruserpersonaltweedsnet";
import { clearTweedOtherUserPersonal } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/clearOtherUserPersonal";
import firebase from "firebase";

export function personalTweedsFetch(uid) {
  firebase
    .firestore()
    .collection("users")
    .doc(uid)
    .get()
    .then((doc) => {
      clearTweedOtherUserPersonal();
      otherUserPersonalTweeds({
        uid: doc.data().uid,
        id: doc.id,
        username: doc.data().username,
        tweed: doc.data().tweed,
      });
    });
}
