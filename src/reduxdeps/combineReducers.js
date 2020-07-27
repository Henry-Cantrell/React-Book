import {combineReducers} from 'redux'
import {loggedReducer} from './loggedReducer'

export const allReducers = combineReducers({
  isLogged: loggedReducer,
})