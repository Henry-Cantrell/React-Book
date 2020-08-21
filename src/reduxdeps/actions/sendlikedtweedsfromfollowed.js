export function sendLikedTweedsFromFollowed (tweed, username, id, uid, uidOfLiker) {
    return ({
        type: 'TWEED_SEND_FOLLOWED_LIKED',
        tweed,
        username,
        id,
        uid,
        uidOfLiker
    })
}