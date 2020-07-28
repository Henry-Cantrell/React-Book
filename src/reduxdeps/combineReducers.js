import {combineReducers} from 'redux'
import {loggedReducer} from './loggedReducer'
import {uidCaptureReducer} from './uidCaptureReducer'

export const allReducers = combineReducers({
  isLogged: loggedReducer,
  uidInt: uidCaptureReducer,
})