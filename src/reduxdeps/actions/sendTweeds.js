export function tweedSend (tweed, username, created, id, uid) {
    return ({
        type: 'TWEED_SEND',
        tweed,
        username,
        created,
        id,
        uid
    })
}