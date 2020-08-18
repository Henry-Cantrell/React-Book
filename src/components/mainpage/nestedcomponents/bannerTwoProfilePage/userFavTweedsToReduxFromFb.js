import firebase from 'firebase'
import {useDispatch} from 'react-redux'
import { sendUserFav } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendUserFav";
import { clearUserFav } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/clearUserFav";

export let userFavoriteTweedGetFromFb = () => {
    firebase
      .firestore()
      .collection("favoriteTweeds")
      .doc(this.props.uniqueUid)
      .collection("tweedsFavoritedByUser")
      .onSnapshot((snapshot) => {
        useDispatch(clearUserFav())
        if (!snapshot.empty) {
          snapshot.forEach((tweed) => {
            useDispatch(
              sendUserFav({
                tweed: tweed.tweed,
                username: tweed.username,
                id: tweed.id,
                uid: tweed.uid,
              })
            );
          });
        }
      });