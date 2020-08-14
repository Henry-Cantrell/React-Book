export function sendLikedTweedsFromFollowed (tweed, username, id, uid) {
    return ({
        type: 'TWEED_SEND_FOLLOWED_LIKED',
        tweed,
        username,
        id,
        uid
    })
}