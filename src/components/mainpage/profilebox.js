import React from 'react'
import {useSelector} from 'react-redux'
import firebase from 'firebase'

export let USER_PROFILE_BOTTOM_LEFT_BOX = (props) => {

    const fireStoreRef = firebase.firestore();
    const uniqueUID = useSelector((state) => state.uidInt);

    //this method retrieves UID specific email and profile name for display in div box 
    
    let getUidFromStore = () => {
          
        fireStoreRef
        .collection("users")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            if (doc.data().uid === uniqueUID) {
              console.log("ok");
            }
            });
          });
      };

      getUidFromStore();
  
    return (
        <div id='boxMaster'>
            <div id='profileName'>

            </div>
            <div id='email'>
            
            </div>
        </div>
    );
  };
  
//to-do:
//create styled div box with user email, profile name and (eventually) avatar color circle 
//create state for user profile name in Redux and also add to firestore 