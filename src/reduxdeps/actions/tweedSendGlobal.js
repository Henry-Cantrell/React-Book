export function tweedSendGlobal (tweed, created, username, uid, id) {
    return ({
        type: 'TWEED_SEND_GLOBAL',
        tweed,
        created,
        username,
        uid,
        id
    })
}