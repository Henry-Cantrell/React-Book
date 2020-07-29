import {combineReducers} from 'redux'
import {loggedReducer} from './loggedReducer'
import {uidCaptureReducer} from './uidCaptureReducer'
import {emailCaptureReducer} from './emailCaptureReducer'
import {usernameCaptureReducer} from './usernameCaptureReducer'

export const allReducers = combineReducers({
  isLogged: loggedReducer,
  uidInt: uidCaptureReducer,
  userEmail: emailCaptureReducer,
  userName : usernameCaptureReducer,
})