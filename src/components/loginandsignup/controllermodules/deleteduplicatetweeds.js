import firebase from "firebase";

export let deleteDuplicateTweeds = (uniqueUid, usernameOfCurrentUser) => {

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