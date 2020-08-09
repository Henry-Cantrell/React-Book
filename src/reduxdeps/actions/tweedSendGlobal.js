export function tweedSendGlobal (tweed, created, id, uid) {
    return ({
        type: 'TWEED_SEND_GLOBAL',
        tweed,
        created,
        id,
        uid
    })
}