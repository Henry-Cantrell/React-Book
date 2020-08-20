import { otherUserPersonalTweeds } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/otheruserpersonaltweedsnet";
import { clearTweedOtherUserPersonal } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/clearOtherUserPersonal";
import firebase from "firebase";
import {useDispatch} from 'react-redux'

export function personalTweedsFetch(uid) {

  firebase
    .firestore()
    .collection("users")
    .doc(uid)
    .collection("userTweeds")
    .get()
    .then((items) => {
      clearTweedOtherUserPersonal();
      items.forEach((tweed) => {
        useDispatch(otherUserPersonalTweeds({
          uid: tweed.data().uid,
          id: tweed.id,
          username: tweed.data().username,
          tweed: tweed.data().tweed,
        }));
      });
    });
}
