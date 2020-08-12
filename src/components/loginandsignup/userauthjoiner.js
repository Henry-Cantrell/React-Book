import React from "react";
import { MODAL_CLASS_FORM } from "./modalcc";
import { MAIN_USER_PAGE } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/mainuserpage";
import { useSelector } from "react-redux";
import firebase from "firebase";
import { tweedSend } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendTweeds";
import { useDispatch } from "react-redux";
import { clearTweedStore } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/clearTweeds";
import { followedTweedSend } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/followedTweedSend";
import { clearTweedFollow } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/clearTweedFollow";

export let USER_AUTH_JOINER = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const uniqueUid = useSelector((state) => state.uidInt);

  const dispatch = useDispatch();

  let transferUserTweedsToRedux = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(uniqueUid)
      .collection("userTweeds")
      .orderBy("created", "asc")
      .onSnapshot((snapshot) => {
        dispatch(clearTweedStore());
        snapshot.forEach((doc) => {
          dispatch(
            tweedSend({
              tweed: doc.data().tweed,
              username: doc.data().username,
              created: doc.data().created,
              id: doc.id,
            })
          );
        });
      });
  };

  let transferFollowerTweedsToRedux = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(uniqueUid)
      .collection("followedUserUids")
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          firebase
            .firestore()
            .collection("users")
            .doc(doc.data().uid)
            .collection("userTweeds")
            .orderBy('created', 'asc')
            .onSnapshot((snapshot) => {
              snapshot.forEach((doc) => {
                firebase
                  .firestore()
                  .collection("users")
                  .doc(uniqueUid)
                  .collection("followerTweeds")
                  .doc(doc.data().uid)
                  .collection("tweeds")
                  .doc(doc.id)
                  .set({
                    tweed: doc.data().tweed,
                    username: doc.data().username,
                    uid: doc.data().uid,
                  })
                  .then(
                    dispatch(clearTweedFollow()),
                    dispatch(
                      followedTweedSend({
                        tweed: doc.data().tweed,
                        username: doc.data().username,
                        id: doc.id,
                        uid: doc.data().uid,
                      })
                    )
                  );
              });
            });
        });
      });
  };

  transferUserTweedsToRedux();
  transferFollowerTweedsToRedux();

  return <>{isLogged ? <MAIN_USER_PAGE /> : <MODAL_CLASS_FORM />}</>;
};
