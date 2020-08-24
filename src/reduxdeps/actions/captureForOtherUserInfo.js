export function captureForOtherUserInfo (otherUserDataObject, username, uid, bio, joinDate, followedCount, followerCount) {
    return ({
        type: 'OTHER_USER_INFO_SEND',
        otherUserDataObject,
        username,
        uid, 
        bio,
        joinDate,
        followedCount,
        followerCount
    })
}