import React from 'react'
import {useSelector} from 'react-redux'
import firebase from 'firebase'

export let USER_PROFILE_BOTTOM_LEFT_BOX = (props) => {
    //capture uid from state with useSelector method
    const uniqueUID = useSelector((state) => state.uidInt);
    //create firestore variable and then push uid to users as document
    const fireStoreRef = firebase.firestore();
  
    let uidToFirestore = (uniqueUID) => {
      fireStoreRef.collection("users").doc(uniqueUID).set({
        uid: uniqueUID,
        name: "stacy",
      });
    };
  
    uidToFirestore(uniqueUID);

    quickTest(uniqueUID)
    //where snapshot is the returned data array containing all user objs
    //loops through snapshot array and returns a specific value from data
    //this method will be the handler for placing data within my code
    //the snapshot array can be parsed and conditionally place user object data, which will allow for component creation, etc. 
    let getUidFromStore = () => {
      fireStoreRef
        .collection("users")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            if (doc.data().uid === uniqueUID) {
              console.log('ok');
            }
          });
        });
    };
  
    getUidFromStore();
  
    return <p>{uniqueUID}</p>;
  };
  
  //consider putting methods into external modules and then importing once done
  //firebase notes:
  //first, get doc via async and then parse with data() method for prop value