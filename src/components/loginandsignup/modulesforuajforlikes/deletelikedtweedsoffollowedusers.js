import firebase from "firebase";
import { useSelector } from "react-redux";

export let DELETE_LIKED_TWEEDS_OF_FOLLOWED_USERS = () => {
  const uniqueUid = useSelector((state) => state.uidInt);
  const usernameOfCurrentUser = useSelector((state) => state.userName);

  firebase
    .firestore()
    .collection("likedTweedsOfFollowedUsers")
    .doc(uniqueUid)
    .collection("tweedPool")
    .onSnapshot((snapshot) => {
      if (!snapshot.empty) {
        snapshot.forEach((docLikedByFollowed) => {
          firebase
            .firestore()
            .collection("users")
            .doc(uniqueUid)
            .collection("followedUserUids")
            .onSnapshot((snapshot) => {
              snapshot.forEach((docFollowed) => {
                if (
                  docFollowed.data().username === docLikedByFollowed.data().username ||
                  usernameOfCurrentUser === docLikedByFollowed.data().username
                ) {
                  console.log("dltofu/30");
                  firebase
                    .firestore()
                    .collection("likedTweedsOfFollowedUsers")
                    .doc(uniqueUid)
                    .collection("tweedPool")
                    .doc(docLikedByFollowed.id)
                    .delete();
                }
              });
            });
        });
      }
    });
};