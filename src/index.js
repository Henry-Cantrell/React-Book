import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app'; 
import {createStore} from 'redux'
import {allReducers} from './reduxdeps/reducers/combineReducers'
import {Provider} from 'react-redux'
import firebase from "firebase";

//Defining firebaseConfig data info 
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
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Final pass of reducers and their respective states to Redux store 

const store = createStore(
  allReducers,
  //Redux FireFox devtools prerequisite code
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Component attachment to DOM

ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>, 
document.getElementById("root"));


