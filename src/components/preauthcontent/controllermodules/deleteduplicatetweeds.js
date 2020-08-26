import firebase from "firebase";

export let deleteDuplicateTweeds = (userUid, usernameOfCurrentUser) => {

  firebase
    .firestore()
    .collection("likedTweedsOfFollowedUsers")
    .doc(userUid)
    .collection("tweedPool")
    .onSnapshot((snapshot) => {
      if (!snapshot.empty) {
        snapshot.forEach((docLikedByFollowed) => {
          firebase
            .firestore()
            .collection("users")
            .doc(userUid)
            .collection("followedUserUids")
            .onSnapshot((snapshot) => {
              snapshot.forEach((docFollowed) => {
                if (
                  docFollowed.data().username === docLikedByFollowed.data().username ||
                  usernameOfCurrentUser === docLikedByFollowed.data().username
                ) {
                  firebase
                    .firestore()
                    .collection("likedTweedsOfFollowedUsers")
                    .doc(userUid)
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