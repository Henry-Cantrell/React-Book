export function sendAllUserInfo (username, uid, bio, joinDate, followedCount, followerCount) {
    return ({
        type: 'SEND_ALL_USER_INFO',
        username,
        uid,
        bio,
        joinDate,
        followedCount,
        followerCount
    })
}