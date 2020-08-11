export function tweedSendGlobal (tweed, created, username, id, uid) {
    return ({
        type: 'TWEED_SEND_GLOBAL',
        tweed,
        created,
        username,
        id,
        uid
    })
}