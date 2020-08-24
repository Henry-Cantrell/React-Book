import firebase from "firebase";
import { sendLikedTweedsFromFollowed } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendlikedtweedsfromfollowed";
import {clearFollowedLikes} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/clearfollowedlikes'

export let likedByFollowedFbToRedux = (uniqueUid, dispatch) => {

    firebase
      .firestore()
      .collection("likedTweedsOfFollowedUsers")
      .doc(uniqueUid)
      .collection("tweedPool")
      .onSnapshot((snapshot) => {
        dispatch(clearFollowedLikes());
        if (!snapshot.empty) {
          snapshot.forEach((docLikedByFollowed) => {
            dispatch(
              sendLikedTweedsFromFollowed({
                usernameOfLiker: docLikedByFollowed.data().usernameOfLiker,
                tweed: docLikedByFollowed.data().tweed,
                username: docLikedByFollowed.data().username,
                id: docLikedByFollowed.id,
                uid: docLikedByFollowed.data().uid,
                uidOfLiker: docLikedByFollowed.data().uidOfLiker
              })
            );
          });
        }
      });
  };

