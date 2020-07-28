import React from 'react';
import ReactDOM from 'react-dom';
import {App} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/app'; 
import {createStore} from 'redux'
import {allReducers} from './reduxdeps/combineReducers'
import {Provider} from 'react-redux'

//Final pass of composed items to store

const store = createStore(
  allReducers,
  //Redux FireFox devtools prerequisite code
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//React component rendering to DOM

ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>, 
document.getElementById("root"));


