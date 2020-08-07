export function tweedSend (tweed, created) {
    return ({
        type: 'TWEED_SEND',
        tweed,
        created
    })
}