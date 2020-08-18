import firebase from "firebase";
import { sendLikedTweedsFromFollowed } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendlikedtweedsfromfollowed";
import {clearFollowedLikes} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/clearfollowedlikes'
import {useSelector, useDispatch} from 'react-redux'

export let TWEEDS_LIKED_BY_FOLLOWED_TO_REDUX = () => {

    const uniqueUid = useSelector((state) => state.uidInt);
    const dispatch = useDispatch();

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
              })
            );
          });
        }
      });
  };

  //to-do: create clone dirs in FB for RT and spread into redux store via this func
  //to-do: rename this component/file to tweeds TOUCHED by followed