let userFavoriteTweedGetFromFb = () => {
    firebase
      .firestore()
      .collection("favoriteTweeds")
      .doc(this.props.uniqueUid)
      .collection("tweedsFavoritedByUser")
      .onSnapshot((snapshot) => {
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