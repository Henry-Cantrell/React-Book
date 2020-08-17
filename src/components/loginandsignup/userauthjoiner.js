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
import { sendLikedTweedsFromFollowed } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendlikedtweedsfromfollowed";
import {clearFollowedLikes} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/clearfollowedlikes'

export let USER_AUTH_JOINER = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const uniqueUid = useSelector((state) => state.uidInt);
  const usernameOfCurrentUser = useSelector((state) => state.userName)
 
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
              uid: doc.data().uid,
            })
          );
        });
      });
  };
  
  let transferFollowedTweedsToRedux = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(uniqueUid)
      .collection("followedTweeds")
      .onSnapshot((snapshot) => {
        dispatch(clearTweedFollow());
        snapshot.forEach((doc) => {
          dispatch(
            followedTweedSend({
              tweed: doc.data().tweed,
              username: doc.data().username,
              id: doc.id,
              uid: doc.data().uid,
            })
          );
        });
      });
  };
  
  let sortTweedsLikedByFollowed = () => {
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
                                usernameOfLiker: docLikedByFollowed.data()
                                  .usernameOfLiker,
                                tweed: docLikedByFollowed.data().tweed,
                                username: docLikedByFollowed.data().username,
                                id: docLikedByFollowed.id,
                                uid: docLikedByFollowed.data().uid,
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

  let deleteLikedTweedsOfFollowedUsers = () => {
    firebase
      .firestore()
      .collection('likedTweedsOfFollowedUsers')
      .doc(uniqueUid)
      .collection('tweedPool')
      .onSnapshot((snapshot) => {
        if (!snapshot.empty) {
          snapshot.forEach((docLikedByFollowed) => {
            firebase
              .firestore()
              .collection('users')
              .doc(uniqueUid)
              .collection('followedUserUids')
              .get()
              .then(
                ((itemsFollowed) => {
                  itemsFollowed.forEach((docFollowed) => {
                    if (docFollowed.id === docLikedByFollowed.data().uid || usernameOfCurrentUser === docLikedByFollowed.data().username)
                    firebase
                    .firestore()
                    .collection('likedTweedsOfFollowedUsers')
                    .doc(uniqueUid)
                    .collection('tweedPool')
                    .doc(docLikedByFollowed.id)
                    .delete()
                  })
                })
              )
          })
        }
      })
  };
  
  
  let tweedsLikedByFollowedToRedux = () => {
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
  
  
  transferUserTweedsToRedux();
  transferFollowedTweedsToRedux();
  sortTweedsLikedByFollowed();
  tweedsLikedByFollowedToRedux();
  deleteLikedTweedsOfFollowedUsers();

  return <>{isLogged ? <MAIN_USER_PAGE /> : <MODAL_CLASS_FORM />}</>;
};

//to-do for component: put redux/fb interaction funcs into seperate modules and then import for run on component load

//TS issues:
//tweedPool needs to rewrite after follow/unfollow action
//adjust algos to update to reflect new follow/unfollow status