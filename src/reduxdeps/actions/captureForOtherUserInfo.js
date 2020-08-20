export function captureForOtherUserInfo (username, uid, bio, joinDate, followedCount, followerCount) {
    return ({
        type: 'OTHER_USER_INFO_SEND',
        username,
        uid, 
        bio,
        joinDate,
        followedCount,
        followerCount
    })
}