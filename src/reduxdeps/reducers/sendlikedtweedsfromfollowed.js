export function sendLikedTweedsFromFollowed (tweed, username, id, uid) {
    return ({
        type: 'TWEED_SEND_FOLLOW_LIKED',
        tweed,
        username,
        id,
        uid
    })
}