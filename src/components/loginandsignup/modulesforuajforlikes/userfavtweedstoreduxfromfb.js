import firebase from "firebase";
import { sendUserFav } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendUserFav";
import { clearUserFav } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/clearUserFav";
import {useSelector, useDispatch} from 'react-redux'

export let UserFavoriteTweedGetFromFb = () => {

  const uniqueUid = useSelector((state) => state.uidInt);
  const dispatch = useDispatch();

  firebase
    .firestore()
    .collection("favoriteTweeds")
    .doc(uniqueUid)
    .collection("tweedsFavoritedByUser")
    .onSnapshot((snapshot) => {
      dispatch(clearUserFav());
      if (!snapshot.empty) {
        snapshot.forEach((tweed) => {
          dispatch(
            sendUserFav({
              tweed: tweed.data().tweed,
              username: tweed.data().username,
              id: tweed.id,
              uid: tweed.data().uid,
            })
          );
        });
      }
    });
};



