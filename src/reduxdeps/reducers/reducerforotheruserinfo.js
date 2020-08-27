export function reducerForOtherUserInfo(state = null, action) {
    switch (action.type) {
      case "OTHER_USER_INFO_SEND":
        return {
          otherUserDataObject: action.otherUserDataObject,
          username: action.username,
          uid: action.uid,
          bio: action.bio,
          joinDate: action.joinDate,
          followedCount: action.followedCount,
          followerCount: action.followerCount,
        }
      case 'ERASE_ALL_USER_INFO':
        return state=null
      default:
        return state=state
    }
  }
  