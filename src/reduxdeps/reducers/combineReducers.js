import {combineReducers} from 'redux'
import {loggedReducer} from './loggedReducer'
import {uidCaptureReducer} from './uidCaptureReducer'
import {emailCaptureReducer} from './emailCaptureReducer'
import {usernameCaptureReducer} from './usernameCaptureReducer'
import {userBioCapture} from './userBioCapture'
import {userJoinDate} from './joinDateReducer'
import {tweedCatch} from './tweedCaptureReducer'
import {counterReducer} from './counterReducer'
import {followedCountReducer} from './followedCountReducer'
import {followerCountReducer} from './followerCountReducer'
import {followedTweedsCapture} from './followedTweedsCapture'
import {likedTweedsFromFollowedCapture} from './likedtweedsfromfollowedcapture'
import {userFavCapture} from './userfavoritecapture'
import {captureAllUserInfo} from './capturealluserinfo'
import {captureAllUserTweeds} from './allusertweedscapture'
import {reducerForOtherUserInfo} from './reducerforotheruserinfo'
import {otherUserPersonalTweedsCapture} from './otheruserpersonaltweedscapture'
import {otherUserFavoriteCapture} from './otheruserfavoritecapture'
import {otherUserUidReducer} from './otherUserUidReducer'

export const allReducers = combineReducers({
  isLogged: loggedReducer,
  userUid: uidCaptureReducer,
  userEmail: emailCaptureReducer,
  username : usernameCaptureReducer,
  userBio : userBioCapture,
  joinDate : userJoinDate,
  userTweeds : tweedCatch,
  counter : counterReducer,
  followedTweeds: followedTweedsCapture,
  followerCount: followerCountReducer,
  followedCount: followedCountReducer,
  likedTweedsFromFollowed: likedTweedsFromFollowedCapture,
  userFavList: userFavCapture,
  allUserInfo: captureAllUserInfo,
  allUserTweeds: captureAllUserTweeds,
  otherUserInfo: reducerForOtherUserInfo,
  otherUserPersonalTweeds: otherUserPersonalTweedsCapture,
  otherUserFavoriteTweeds: otherUserFavoriteCapture,
  otherUserUid: otherUserUidReducer
})