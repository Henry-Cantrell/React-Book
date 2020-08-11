export function followedTweedSend (tweed, username, id, uid) {
    return ({
        type: 'TWEED_SEND_FOLLOW',
        tweed,
        username,
        id,
        uid
    })
}