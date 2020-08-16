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
      .collection('users')
      .doc(uniqueUid)
      .collection('followedUserUids')
      .onSnapshot((snapshot) => {
        snapshot.forEach((docFollowed) => {
          if (docFollowed.data().followStatus === 'followed') {
          firebase
            .firestore()
            .collection('likedTweeds')
            .doc(docFollowed.id)
            .collection('tweedsLikedByUser')
            .onSnapshot((snapshot) => {
              snapshot.forEach((docLikedByFollowed) => {
                firebase
                  .firestore()
                  .collection('likedTweedsOfFollowedUsers')
                  .doc(uniqueUid)
                  .set({
                    dnd: 'dnd'
                  })
                  .then(
                    firebase
                      .firestore()
                      .collection('likedTweedsOfFollowedUsers')
                      .doc(uniqueUid)
                      .collection('tweedPool')
                      .doc(docLikedByFollowed.id)
                      .set({
                        usernameOfLiker: docLikedByFollowed.data().usernameOfLiker,
                        tweed: docLikedByFollowed.data().tweed,
                        username: docLikedByFollowed.data().username,
                        id: docLikedByFollowed.id,
                        uid: docLikedByFollowed.data().uid,
                      })
                  )
              })
            })
        }})
      })
  }

  let deleteLikedTweedsOfFollowedUsers = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(uniqueUid)
      .collection("followedUserUids")
      .onSnapshot((snapshot) => {
        snapshot.forEach((docFollowed) => {
          firebase
            .firestore()
            .collection("likedTweedsOfFollowedUsers")
            .doc(uniqueUid)
            .collection("tweedPool")
            .onSnapshot((snapshot) => {
              if (snapshot.size != 0) {
                snapshot.forEach((docLikedByFollowed) => {
                  if (
                    docLikedByFollowed.data().uid === docFollowed.id ||
                    docLikedByFollowed.data().username === usernameOfCurrentUser
                  ) {
                    firebase
                      .firestore()
                      .collection("likedTweedsOfFollowedUsers")
                      .doc(uniqueUid)
                      .collection("tweedPool")
                      .doc(docLikedByFollowed.id)
                      .delete();
                  }
                });
              }
            });
        });
      });
  };
  
  let tweedsLikedByFollowedToRedux = () => {
    firebase
      .firestore()
      .collection("likedTweedsOfFollowedUsers")
      .doc(uniqueUid)
      .collection("tweedPool")
      .onSnapshot((snapshot) => {
        dispatch(clearFollowedLikes());
        if (snapshot.size != 0) {
          snapshot.forEach((doc) => {
            dispatch(
              sendLikedTweedsFromFollowed({
                usernameOfLiker: doc.data().usernameOfLiker,
                tweed: doc.data().tweed,
                username: doc.data().username,
                id: doc.id,
                uid: doc.data().uid,
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

//to-do: put redux/fb interaction funcs into seperate modules and then import for run on component load
//need to actually modify tweedpool to trigger onsnapshot