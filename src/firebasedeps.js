import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAlfuv4EZyoip1S8hKCM3XQri994y8A6HA",
  authDomain: "website-clone-top-js-capstone.firebaseapp.com",
  databaseURL: "https://website-clone-top-js-capstone.firebaseio.com",
  projectId: "website-clone-top-js-capstone",
  storageBucket: "website-clone-top-js-capstone.appspot.com",
  messagingSenderId: "256336655287",
  appId: "1:256336655287:web:e78e15dc235493cffb6e32",
  storageBucket: 'gs://website-clone-top-js-capstone.appspot.com'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const fireBaseExternalObj = {
  dataBase: firebase.firestore(),
  auth: firebase.auth(),
};