import firebase from "firebase";

export let sortFollowedUserLikesInFb = (uniqueUid) => {

    firebase
      .firestore()
      .collection("users")
      .doc(uniqueUid)
      .collection("followedUserUids")
      .onSnapshot((snapshot) => {
        snapshot.forEach((docFollowed) => {
          firebase
            .firestore()
            .collection("likedTweeds")
            .doc(docFollowed.id)
            .collection("tweedsLikedByUser")
            .get()
            .then((items) => {
              items.forEach((docLikedByFollowed) => {
                firebase
                  .firestore()
                  .collection("users")
                  .doc(uniqueUid)
                  .collection("followedUserUids")
                  .get()
                  .then((itemsFollowed) => {
                    itemsFollowed.forEach((docFollowedLayerTwo) => {
                      if (
                        docFollowedLayerTwo.id != docLikedByFollowed.data().uid
                      ) {
                        firebase
                          .firestore()
                          .collection("likedTweedsOfFollowedUsers")
                          .doc(uniqueUid)
                          .set({
                            dnd: "dnd",
                          })
                          .then(
                            firebase
                              .firestore()
                              .collection("likedTweedsOfFollowedUsers")
                              .doc(uniqueUid)
                              .collection("tweedPool")
                              .doc(docLikedByFollowed.id)
                              .set({
                                usernameOfLiker: docLikedByFollowed.data().usernameOfLiker,
                                tweed: docLikedByFollowed.data().tweed,
                                username: docLikedByFollowed.data().username,
                                id: docLikedByFollowed.id,
                                uid: docLikedByFollowed.data().uid,
                                uidOfLiker: docLikedByFollowed.data().uidOfLiker
                              })
                          );
                      }
                    });
                  });
              });
            });
        });
      });
  };