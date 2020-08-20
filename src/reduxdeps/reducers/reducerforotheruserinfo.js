export function reducerForOtherUserInfo(state = null, action) {
    switch (action.type) {
      case "OTHER_USER_INFO_SEND":
        return {
          username: action.username,
          uid: action.uid,
          bio: action.bio,
          joinDate: action.joinDate,
          followedCount: action.followedCount,
          followerCount: action.followerCount,
        }
      default:
        return state=state
    }
  }
  