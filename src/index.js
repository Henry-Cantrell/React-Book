import React from 'react';
import ReactDOM from 'react-dom';
import {App} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/app'; 
import {createStore, applyMiddleware, compose} from 'redux'
import {allReducers} from './reduxdeps/combineReducers'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'

//thunk has been installed to allow for async dispatch calls
//Composing FF devtools and thunk for final pass to createStore as per Redux reqs

const composedItems = [ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware)]

//Final pass of composed items to store

const store = createStore(
  allReducers,
  compose(...composedItems)
);

//React component rendering to DOM

ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>, 
document.getElementById("root"));


