export function tweedSend (tweed, username, created, id) {
    return ({
        type: 'TWEED_SEND',
        tweed,
        username,
        created,
        id
    })
}