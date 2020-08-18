import {DELETE_LIKED_TWEEDS_OF_FOLLOWED_USERS} from './deletelikedtweedsoffollowedusers'
import {SORT_LIKED_TWEEDS_BY_FOLLOWED} from './sorttweedslikedbyfollowed'
import {TRANSFER_FOLLOWED_TWEEDS_TO_REDUX} from './transferfollowedtweedstoredux'
import {TRANSFER_USER_TWEEDS_TO_REDUX} from './transferusertweedstoredux'
import {TWEEDS_LIKED_BY_FOLLOWED_TO_REDUX} from './tweedsikedbyfollowedtoredux'
import {UserFavoriteTweedGetFromFb} from './userfavtweedstoreduxfromfb'

export let joinerForUaj = () => {
  DELETE_LIKED_TWEEDS_OF_FOLLOWED_USERS();
  SORT_LIKED_TWEEDS_BY_FOLLOWED();
  TRANSFER_FOLLOWED_TWEEDS_TO_REDUX();
  TRANSFER_USER_TWEEDS_TO_REDUX();
  TWEEDS_LIKED_BY_FOLLOWED_TO_REDUX();
  UserFavoriteTweedGetFromFb();
  }