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
      //good
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
      //good
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
            .get()
            .then((items) => {
              items.forEach((docLikedByFollowed) => {
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
      //Module status:
      //determine why tweedPool not properly updating on follow/unfollow action.

      //Troubleshooting progress:
      //On unfollow event, tweed correctly re-written into tweedpool, then incorrectly deleted by DLTOFU algo?
  }

  let deleteLikedTweedsOfFollowedUsers = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(uniqueUid)
      .collection("followedUserUids")
      .onSnapshot((snapshot) => {
        snapshot.forEach((docFollowed) => {
          if (docFollowed.data().followStatus === "followed") {
            firebase
              .firestore()
              .collection("likedTweedsOfFollowedUsers")
              .doc(uniqueUid)
              .collection("tweedPool")
              .get()
              .then((docLikedByFollowed) => {
                if (snapshot.size != 0) {
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
                }
              });
          } else if (docFollowed.data().followStatus === "unfollowed") {
            firebase
              .firestore()
              .collection("likedTweedsOfFollowedUsers")
              .doc(uniqueUid)
              .collection("tweedPool")
              .get()
              .then((items) => {
                if (items.size != 0) {
                  items.forEach((docLikedByFollowed) => {
                    if (
                      docFollowed.data().username ===
                      docLikedByFollowed.data().usernameOfLiker
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
          }
        });
      });
    //Troubleshooting progress:
    //double check all onSnapshot block scopes for unwanted deletion
  };
  
  
  let tweedsLikedByFollowedToRedux = () => {
    firebase
      .firestore()
      .collection('users')
      .doc(uniqueUid)
      .collection('followedUserUids')
      .onSnapshot((snapshot) => {
        snapshot.forEach((docFollowed) => {
          firebase
          .firestore()
          .collection("likedTweedsOfFollowedUsers")
          .doc(uniqueUid)
          .collection("tweedPool")
          .onSnapshot((snapshot) => {
            dispatch(clearFollowedLikes());
            if (snapshot.size != 0) {
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
        })
      })
      //Module status:
      //in prog
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