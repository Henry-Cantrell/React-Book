import {combineReducers} from 'redux'
import {loggedReducer} from './loggedReducer'
import {uidCaptureReducer} from './uidCaptureReducer'
import {emailCaptureReducer} from './emailCaptureReducer'
import {usernameCaptureReducer} from './usernameCaptureReducer'
import {userBioCapture} from './userBioCapture'
import {userJoinDate} from './joinDateReducer'
import {tweedCatch} from './tweedCaptureReducer'

export const allReducers = combineReducers({
  isLogged: loggedReducer,
  uidInt: uidCaptureReducer,
  userEmail: emailCaptureReducer,
  userName : usernameCaptureReducer,
  userBio : userBioCapture,
  joinDate : userJoinDate,
  userTweeds : tweedCatch
})